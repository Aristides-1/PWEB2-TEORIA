from django.shortcuts import render, redirect
from .models import Persona
from .forms import RawPersonaForm


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

def personasAnotherCreateView(request):
    form = RawPersonaForm()
    context = {
        'form': form,
        }
    return render(request, 'personas/personasCreate.html', context)
    