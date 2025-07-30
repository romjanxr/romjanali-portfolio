from django.shortcuts import redirect

# Create your views here.

from django.http import JsonResponse


def redirect_to_docs(request):
    return redirect("/docs/")
