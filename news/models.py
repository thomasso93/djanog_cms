from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from datetime import date


class News(models.Model):
    news_created_by = models.ForeignKey(User, related_name='news_created_by', null=True)
    date = models.DateField("Date", default=date.today)
    title = models.CharField(max_length=100)
    text = models.TextField()