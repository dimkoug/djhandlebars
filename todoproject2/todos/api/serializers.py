from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.tokens import RefreshToken


from todos.models import *


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            is_active=True

        )

        
        user.set_password(validated_data['password'])
        user.save()

        return user





class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','password','username', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'password':{'write_only': True},
        }




class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ('id','password','username', 'email', 'first_name', 'last_name', 'token')
        extra_kwargs = {
            'password':{'write_only': True},
        }

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)



class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','url', 'name']


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id','url', 'name']



class TodoTagSerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True)
    class Meta:
        model = TodoTag
        fields = ("todo", "tag")


class TodoSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Todo
        fields = ['id','url', 'name', 'category',"tags"]
        extra_kwargs = {'tagsdata': {'required': False}}
    
    def post(validated_data):
        return Todo.objects.create(**validated_data)