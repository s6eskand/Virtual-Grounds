from .views import (
    TaskListCreateView
)
from django.urls import path

urlpatterns = [
#what is 'profile' here? does this path need to be changed to somewhere else?
    path('task', TaskListCreateView.as_view()),
]