from rest_framework import views, response, status, permissions
from .serializers import SleepLogSerializer
from ..models import SleepLog

# helper function to convert datetime.time into numeric value
def datetime_to_int(datetime):
    hours = datetime.hour
    minute = datetime.minute / 60
    return hours + minute

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

class SleepAnalytics(views.APIView)
        

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

        sleep = 0
        for sleep in queryset
            sleep += sleep.sleep_amount
        
        return response.Response(
            {"total_sleep_time":  sleep}, status=status.HTTP_200_OK
        )



        
        
    


#create function to get sleep analytics from a user
#total number in hours per week