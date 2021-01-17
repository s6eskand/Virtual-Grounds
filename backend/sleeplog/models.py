from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class SleepLog(models.Model):
    sleep_amount = models.FloatField(default=0)
    date = models.DateField(auto_now=False)
    owner = models.ForeignKey(
        User,
        related_name="sleeplog",
        on_delete=models.CASCADE,
        null=True
    )