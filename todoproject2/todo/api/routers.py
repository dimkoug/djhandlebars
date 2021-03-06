from django.urls import path
from rest_framework import routers
from . import viewsets

router = routers.DefaultRouter()
router.register(r'categories', viewsets.CategoryViewSet)
router.register(r'tags', viewsets.TagViewSet)
router.register(r'todos', viewsets.TodoViewSet)
router.register(r'users', viewsets.UserViewSet)
router.register(r'groups', viewsets.GroupViewSet)

urlpatterns = router.urls + [
    path('current_user/', viewsets.current_user),
    path('register/', viewsets.RegisterApi.as_view()),
    # path('users/', UserList.as_view())
]
