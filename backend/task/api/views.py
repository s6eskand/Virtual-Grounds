from rest_framework import views, response, status, permissions
from .serializers import TaskSerializer
from ..models import Task
from ..models import 

# helper function to convert datetime.time into numeric value
def datetime_to_int(datetime):
    hours = datetime.hour
    minute = datetime.minute / 60
    return hours + minute

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

class TaskAnalytics(views.APIView):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    '''
    STEPS FOR ANALYTICS
    1. Total time of completed tasks in week
    2. Total time of tasks not completed
    3. Breakdown of all categories (time)
    4. Sleep analysis (later)
    '''
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
        sleepqueryset = SleepLog.objects.filter(
            owner=self.request.user, 
            date__range=[last_week, curr_date]
        )

        sleep = 0
        for sleep in queryset
            sleep += sleep.sleep_amount      

        categories = {
            "total": 0,
            "total_completed": 0,
            "total_uncompleted": 0, 
            "sleep": sleep,
        }
        for task in queryset:
            category = task.task_name
            start = datetime_to_int(task.time_to_start)
            end = datetime_to_int(task.time_to_complete)
            time_for_task = end - start
            categories["total"] += time_for_task
            if task.status == "COMPLETED":
                categories["total_completed"] += time_for_task
            else:
                categories["total_uncompleted"] += time_for_task

            if categories.get(category):
                categories[category] += time_for_task
            else:
                categories[category] = time_for_task

        categories["available_down_time"] = 168 - categories["total"] - sleep

        return response.Response(
            categories, status=status.HTTP_200_OK
        )
