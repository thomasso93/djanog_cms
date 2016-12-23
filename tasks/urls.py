from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^user/login', views.task_list, name='task_list')
]
