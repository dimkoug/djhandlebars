from django.contrib.auth.models import User, Group
from django.core import serializers as core_serializers
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, permissions, viewsets, status,serializers


from todos.models import *
from .serializers import *


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

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]





class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]




class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]


class TagViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Tags to be viewed or edited.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [permissions.IsAuthenticated]



class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Tags to be viewed or edited.
    """
    queryset = Todo.objects.select_related('category').prefetch_related('tags').all()
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args,  **kwargs):
        serializer = self.serializer_class(data=request.data)
        print(request.data)
        if serializer.is_valid():
            data = Todo.objects.create(**serializer.validated_data)
            if "tags" in request.data:
                tags = Tag.objects.filter(id__in=request.data.getlist('tags'))
                print(tags)
                data.tags.add(*tags)
            serialized_obj = core_serializers.serialize('json', [data])
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