from django.conf.urls import url
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from tastypie import fields
from tastypie.http import HttpForbidden, HttpUnauthorized
from tastypie.resources import ModelResource
from tastypie.utils import trailing_slash

from tasks.models import Task
from tastypie.authorization import Authorization


class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        excludes = ['email', 'password', 'is_active', 'is_staff', 'is_superuser']
        fields = ['id', 'username']
        allowed_methods = ['get', 'post']

    def override_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/login%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('login'), name="api_login"),
            url(r'^(?P<resource_name>%s)/logout%s$' %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('logout'), name='api_logout'),
        ]

    def login(self, request, **kwargs):
        self.method_check(request, allowed=['post'])

        data = self.deserialize(request, request.body, format=request.META.get('CONTENT_TYPE', 'application/json'))

        username = data.get('username', '')
        password = data.get('password', '')

        user = authenticate(username=username, password=password)

        if user:
            if user.is_active:
                login(request, user)
                return self.create_response(request, {
                    'success': True,
                    'username': user,
                    'password': password,
                    'id': user.id,
                    'isAdmin': user.is_superuser
                })
            else:
                return self.create_response(request, {
                    'success': False,
                    'reason': 'disabled',
                    }, HttpForbidden )
        else:
            return self.create_response(request, {'success': False, 'reason': 'incorrect', }, HttpUnauthorized )

    def logout(self, request, **kwargs):
        self.method_check(request, allowed=['post'])

        data = self.deserialize(request, request.body, format=request.META.get('CONTENT_TYPE', 'application/json'))

        username = data.get('username', '')
        password = data.get('password', '')

        user = authenticate(username=username, password=password)

        if user and user.is_authenticated():
            logout(request)
            return self.create_response(request, {'success': True})
        else:
            return self.create_response(request, {'success': False}, HttpUnauthorized)


class UserProfileResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user', full=True)

    class Meta:
        allowed_methods = ['get', 'post']


class TaskResource(ModelResource):
    created_by = fields.ForeignKey(UserResource, 'created_by', full=True)
    assigned_to = fields.ForeignKey(UserResource, 'assigned_to', full=True)

    class Meta:
        queryset = Task.objects.all()
        allowed_methods = ['get', 'post']
        authorization = Authorization()