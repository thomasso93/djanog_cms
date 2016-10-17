from __future__ import unicode_literals

from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    points = models.FloatField()