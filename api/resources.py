from django.contrib.auth.models import User
from tastypie import fields
from tastypie.resources import ModelResource
from tasks.models import Task
from tastypie.authorization import Authorization


class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        excludes = ['email', 'password', 'is_active', 'is_staff', 'is_superuser']
        fields = ['id', 'username']
        allowed_methods = ['get']


class TaskResource(ModelResource):
    created_by = fields.ForeignKey(UserResource, 'created_by')
    assigned_to = fields.ForeignKey(UserResource, 'assigned_to')

    class Meta:
        queryset = Task.objects.all()
        allowed_methods = ['get', 'post']
        authorization = Authorization()