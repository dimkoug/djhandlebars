from django.contrib.auth import get_user_model
from django.core import serializers
from django.contrib.auth.models import Group
from rest_framework.pagination import PageNumberPagination
from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from todo.models import Category, Tag, Todo, TodoTag

from .serializers import (
    UserSerializer, GroupSerializer,
    RegisterSerializer,
    CategorySerializer, TagSerializer, TodoSerializer
)


User = get_user_model()


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer_context = {
        'request': request,
    }
    serializer = UserSerializer(request.user, context=serializer_context)
    return Response(serializer.data)


class CustomPageNumberPagination(PageNumberPagination):
    page_size_query_param = 'page_size'


class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(
                user, context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token",
        })


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = CustomPageNumberPagination
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args,  **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            data = Category.objects.create(**serializer.validated_data)
            serialized_obj = serializers.serialize('json', [data])
            return Response(serialized_obj, status=status.HTTP_201_CREATED)
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    pagination_class = CustomPageNumberPagination
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args,  **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            data = Tag.objects.create(**serializer.validated_data)
            serialized_obj = serializers.serialize('json', [data])
            return Response(serialized_obj, status=status.HTTP_201_CREATED)
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args,  **kwargs):
        serializer = self.serializer_class(data=request.data)
        print(request.data)
        if serializer.is_valid():
            data = Todo.objects.create(**serializer.validated_data)
            if "tags" in request.data:
                tags = Tag.objects.filter(id__in=request.data.getlist('tags'))
                print(tags)
                data.tags.add(*tags)
            serialized_obj = serializers.serialize('json', [data])
            return Response(serialized_obj, status=status.HTTP_201_CREATED)
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk):
        todo = self.get_object()
        TodoTag.objects.filter(todo=todo).delete()
        serializer = TodoSerializer(todo, data=request.data,
                                    context={'request': request})
        if serializer.is_valid():
            serializer.save()
            if "tags" in request.data:
                tags = Tag.objects.filter(id__in=request.data.getlist('tags'))
                todo.tags.add(*tags)
            return Response(serializer.data)
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
