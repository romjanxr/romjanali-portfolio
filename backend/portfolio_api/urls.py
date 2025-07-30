from django.contrib import admin
from django.urls import path, include
from apps.core.views import redirect_to_docs
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", redirect_to_docs, name="home"),
    path("v1/", include("api.urls")),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

]
