from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class UserProfile(models.Model):
    school = models.CharField(max_length=200)
    term = models.CharField(max_length=50)
    term_type = models.CharField(max_length=100)
    company = models.CharField(max_length=300, null=True)
    job_search_status = models.BooleanField(default=False)
    biography = models.CharField(max_length=350, blank=True, null=True)
    interests = ArrayField(models.CharField(max_length=100), blank=True)
    owner = models.ForeignKey(
        User,
        related_name="profile",
        on_delete=models.CASCADE,
        null=True
    )