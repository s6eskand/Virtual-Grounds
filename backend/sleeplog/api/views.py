from rest_framework import views, response, status, permissions
from .serializers import SleepLogSerializer
from ..models import SleepLog

class SleepLogCreateView(views.APIView):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        queryset = SleepLog.objects.filter(owner=self.request.user)
        serializer = SleepLogSerializer(queryset, many=True)
        return response.Response(serializer.data)

    def post(self, request):
        serializer = SleepLogSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status.HTTP_201_CREATED)
        return response.Response({
            "error": "Invalid Request Body"
        }, status.HTTP_400_BAD_REQUEST)


        # hours per week organized
        # hours per day on average


#create function to get sleep analytics from fitbit in a date range for a user
#total number in hours per week