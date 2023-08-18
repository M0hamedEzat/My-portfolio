from django.shortcuts import render
import django.http as http

# Create your views here.
def index(request):
    return render(request, 'index.html')
