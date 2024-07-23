from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Recipe(models.Model):
	name = models.CharField(max_length=100)
	description = models.TextField()
	ingredients = models.TextField()
	process = models.TextField()
	tags = models.TextField()
	notes = models.TextField(null=True, blank=True)
	author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="recipes")
	def __str__(self):
		return self.name
