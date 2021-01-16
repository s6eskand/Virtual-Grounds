from .views import (
    UserProfileListCreateView
)
from django.urls import path

urlpatterns = [
    path('profile', UserProfileListCreateView.as_view()),
]