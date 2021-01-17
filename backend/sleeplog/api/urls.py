from .views import (
    SleepLogCreateView
)
from django.urls import path

urlpatterns = [
    path('log', SleepLogCreateView.as_view()),
]