from rest_framework import views, response, status, permissions
from .serializers import UserProfileSerializer
from ..models import UserProfile


class UserProfileListCreateView(views.APIView):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        queryset = UserProfile.objects.get(owner=self.request.user)
        serializer = UserProfileSerializer(queryset)
        return response.Response(serializer.data)

    def post(self, request):
        request.data["owner"] += 33
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status.HTTP_201_CREATED)
        return response.Response({
            "error": "Invalid Request Body"
        }, status.HTTP_400_BAD_REQUEST)
