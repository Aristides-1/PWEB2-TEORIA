from django.shortcuts import render
from .models import Personas

def personaTestView(request):
    obj = Personas.objects.get(id = 1)
    context ={
        'objeto': obj,
        }
    return render(request, 'personas/descripcion.html', context)
