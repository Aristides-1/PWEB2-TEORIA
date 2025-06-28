from django.shortcuts import render
from django.http import HttpResponse

#Create your views here.
def myHomeView(request, *args, **kwargs):
    myContext = {
        'myText': 'Esto es sobre nosotros',
        'myNumber':123,
    }
    return render(request, 'home.html', myContext)

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