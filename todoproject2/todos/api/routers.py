from django.urls import include, path
from rest_framework import routers
from . import viewsets

router = routers.DefaultRouter()
router.register(r'users', viewsets.UserViewSet)
router.register(r'groups', viewsets.GroupViewSet)
router.register(r'categories', viewsets.CategoryViewSet)
router.register(r'tags', viewsets.TagViewSet)
router.register(r'todos', viewsets.TodoViewSet)


urlpatterns = router.urls + [
    path('current_user/', viewsets.current_user),
    path('register/', viewsets.RegisterView.as_view()),
    # path('users/', UserList.as_view())
]
