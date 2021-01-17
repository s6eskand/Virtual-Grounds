from .views import (
    TaskListCreateView,
    TaskAnalytics
)
from django.urls import path

urlpatterns = [
#what is 'profile' here? does this path need to be changed to somewhere else?
    path('task', TaskListCreateView.as_view()),
    path('analytics', TaskAnalytics.as_view())
]