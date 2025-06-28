from django.shortcuts import render
from .models import Personas

def personaTestView(request):
    obj = Personas.objects.get(id = 1)
    context ={
        'nombre':obj.nombres,
        'edad':obj.edad,
    }
    return render(request, 'personas/test.html', context)
