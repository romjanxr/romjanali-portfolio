from django.contrib import admin
from django.urls import path, include
from apps.core.views import root_api_view


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", "root_api_view", name="home"),
    path("v1/", include("api.urls"))
]
