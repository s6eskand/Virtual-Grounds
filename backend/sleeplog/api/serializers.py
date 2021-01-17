from ..models import SleepLog
from rest_framework import serializers

class SleepLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = SleepLog
        fields = '__all__'