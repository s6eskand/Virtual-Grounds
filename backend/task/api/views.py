from rest_framework import views, response, status, permissions
from .serializers import TaskSerializer
from ..models import Task

#for file implementation
Import os 
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_POST


class TaskListCreateView(views.APIView):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        queryset = Task.objects.filter(owner=self.request.user)
        serializer = TaskSerializer(queryset, many=True)
        return response.Response(serializer.data)

    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status.HTTP_201_CREATED)
        return response.Response({
            "error": "Invalid Request Body"
        }, status.HTTP_400_BAD_REQUEST)
    
    #file implementation
    def file_upload(request):
        save_path = os.path.join(settings.MEDIA_ROOT, 'uploads', request.FILES['file'])
        path = default_storage.save(save_path, request.FILES['file'])
        document = Document.objects.create(document=path, upload_by=request.user)
        return JsonResponse({'document': document.id})

