from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    created_by = models.ForeignKey(User, related_name='created_by', null=True)
    assigned_to = models.ForeignKey(User, related_name='assigned_to', null=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    points = models.FloatField()