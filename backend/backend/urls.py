from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('authentication.api.urls')),
    path('userprofile/', include('userprofile.api.urls')),
    path('tasks/', include('tasks.api.urls')),
    path('sleep/', include('sleeplog.api.urls')),
]
