from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):

    #List set for priority attribute later on, choices
    PRIORITIES = [
        ('H', 'High'),
        ('M', 'Medium'),
        ('L', 'Low'),
    ]

    taskName = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    priority = models.CharField(max_length=6, choices=PRIORITIES)
    description = models.TextField(max_length=300, blank=True, null=True)

    dateCreated = models.CharField(max_length=50, blank=True, null=True)
    dateUpdated = models.CharField(max_length=50, blank=True, null=True)

    #link to document class
    document = models.ForeignKey(Document)
    
    #Supposed to recurse, allowing for subtasks in each task. Get rid if implemented wrong or too complex for our application
    subTask = models.ForeignKey('self', null=True, related_name='task') 

    #in case we wanna call the tasks anywhere, organize. Get rid if unnecessary
    def __str__(self):
        return self.taskName

#For file/document creation and uploading
class Document(models.Model):
    upload_by = models.ForeignKey('auth.User', related_name='uploaded_documents')
    datestamp = models.DateTimeField(auto_now_add=True)
    document = models.Field(upload_to='uploads/')
    
    