from django.shortcuts import render
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
        form = PersonaForm()

    context = {
        'form': form
    }
    return render(request, 'personas/personasCreate.html', context)
