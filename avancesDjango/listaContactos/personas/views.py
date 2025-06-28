from django.shortcuts import render, redirect
from .models import Personas
from .forms import PersonaForm


def personaTestView(request):
    obj = Personas.objects.get(id = 1)
    context ={
        'objeto': obj,
        }
    return render(request, 'personas/descripcion.html', context)

def personaCreateView(request):
    print(request)
    if request.method == "POST":
        nombre = request.POST.get('q')
        print(nombre)
    context = {}
    return render(request, 'personas/personasCreate.html', context)

def searchForHelp(request):
    return render(request, 'personas/search.html', {})
