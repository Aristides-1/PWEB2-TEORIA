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
    form = PersonaForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('/admin/personas/personas/')  
    context = {
        'form': form
    }
    return render(request, 'personas/personasCreate.html', context)

def searchForHelp(request):
    return render(request, 'personas/search.html', {})
