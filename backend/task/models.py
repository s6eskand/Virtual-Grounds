from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    task_name = models.CharField(max_length=100, null=False)
    status = models.CharField(max_length=100, null=False)
    priority = models.CharField(max_length=10, null=False)
    description = models.TextField(max_length=300, blank=True, null=True)
    time_to_start = models.TimeField(auto_now=False)
    time_to_complete = models.TimeField(auto_now=False)
    date_to_complete = models.DateField(auto_now=False, null=False)
    last_modified = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(
        User,
        related_name="task",
        on_delete=models.CASCADE,
        null=True
    )