from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Recipe


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class RecipeSerializer(serializers.ModelSerializer):

    '''
    def validate_name(self, value):
        if value == "Test":
            raise serializers.ValidationError("Name is required!")
    '''
    

    class Meta:
        model = Recipe
        fields = ["id", "name", "description", "ingredients", "process", "tags", "notes", "author"]
        extra_kwargs = {"author": {"read_only": True}}