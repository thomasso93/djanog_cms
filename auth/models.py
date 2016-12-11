from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name="profile")
    name = models.CharField(max_length=50)
