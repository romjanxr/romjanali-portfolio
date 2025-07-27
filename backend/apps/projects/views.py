from django.shortcuts import render

# Create your views here.
# projects/views.py
from rest_framework import viewsets
from .models import Project
from .serializers import ProjectListSerializer, ProjectDetailSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    lookup_field = 'slug'  # use slug for detail URLs

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProjectDetailSerializer
        return ProjectListSerializer
