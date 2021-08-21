from django.urls import path

from .views import get_categories, get_tags


urlpatterns = [
    path('get_categories/', get_categories, name="get_categories"),
    path('get_tags/', get_tags, name="get_tags"),
]
