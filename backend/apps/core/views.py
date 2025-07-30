from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse


def root_api_view(request):
    return JsonResponse({
        "message": "Welcome to the RomjanAli API",
        "version": "v1",
        "documentation": "https://api.romjanali.dev/docs/"
    })
