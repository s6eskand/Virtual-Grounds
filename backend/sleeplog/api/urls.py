from .views import (
    SleepLogCreateView
)
from django.urls import path

urlpatterns = [
    path('sleeplog', SleepLogCreateView.as_view()),
]