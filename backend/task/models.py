from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    