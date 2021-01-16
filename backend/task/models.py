from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    task_name = models.CharField(max_length=100, null=False)
    status = models.CharField(max_length=100, null=False)
    priority = models.CharField(max_length=10, null=False)
    description = models.TextField(max_length=300, blank=True, null=True)
    date_to_complete = models.DateField(auto_now=False, default=None, null=True)
    last_modified = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(
        User,
        related_name="task",
        on_delete=models.CASCADE,
        null=True
    )