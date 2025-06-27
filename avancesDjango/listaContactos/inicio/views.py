from django.shortcuts import render
from django.http import HttpResponse

#Create your views here.
def myHomeView(request, *args, **kwargs):
    print(args, kwargs)
    print(request.user)
    return render(request,"home.html",{})

def anotherView(request):
    return HttpResponse('<h1>Sólo otra página</h1>')

def home(request):
    return render(request, 'home.html')

def primera(request):
    return render(request, 'primera.html')

def segunda(request):
    return render(request, 'segunda.html')

def tercera(request):
    return render(request, 'tercera.html')