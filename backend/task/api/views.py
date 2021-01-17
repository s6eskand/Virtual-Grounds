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

        #idk where to put this function, it could probably be in the for loop?
        def total_task_time(request)
            curr_time_1 = request.data["time_to_complete"]
            split_time_1 = curr_time_1.split(":")
            curr_time_2 = request.data["time_to_start"]
            split_time_2 = curr_time_2.split(":")
            return total_task_time = [split_time_2[0]-split_time_1[0], split_time_2[1]-split_time_1[1]]

        total_time = []
        for task in queryset:
            total_time[0] += total_task_time[0]
            total_time[1] += total_task_time[1]
        new_total = ":".join(total_time)

        total_gym_time = []
        for task in queryset:
            if task.task_name == "gym" 
               or task.task_name == "workout"
               or task.task_name == "exercise"
               or task.task_name == "aerobics"
               or task.task_name == "fitness" 
                total_gym_time[0] += total_task_time[0]
                total_gym_time[1] += total_task_time[1]
        new_total_gym = ":".join(total_gym_time)
        
        total_study_time = []
        for task in queryset:
            if task.task_name == "study" 
               or task.task_name == "class" 
               or task.task_name == "school" 
               or task.task_name == "education"
               or task.task_name == "learn"
                total_study_time[0] += total_task_time[0]
                total_study_time[1] += total_task_time[1]
        new_total_study = ":".join(total_study_time)
        
        total_work_time = []
        for task in queryset:
            if task.task_name == "work" 
               or task.task_name == "office" 
               or task.task_name == "job" 
               or task.task_name == "career"
                total_work_time[0] += total_task_time[0]
                total_work_time[1] += total_task_time[1]
        new_total_work = ":".join(total_work_time)

        # hours per week organized
        # 