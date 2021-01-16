from rest_framework import views, response, status, permissions
from .serializers import TaskSerializer
from ..models import Task

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


class TaskAnalytics(views.APIView):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def post(self, request):
        curr_date = request.data["date"]
        split_date = curr_date.split("-")
        new_day = int(split_date[2]) - 7
        split_date[2] = str(new_day)
        last_week = "-".join(split_date)
        queryset = Task.objects.filter(
            owner=self.request.user, 
            date_to_complete__range=[last_week, curr_date]
        )
        serializer = TaskSerializer(queryset, many=True)
        # hours per week organized
        # 