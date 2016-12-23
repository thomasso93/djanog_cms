from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=30)
    is_admin = models.BooleanField(default=False)