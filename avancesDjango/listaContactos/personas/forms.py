from django import forms
from .models import Persona  # Asegúrate que este modelo exista

class PersonaForm(forms.ModelForm):
    class Meta:
        model = Persona
        fields = [
            'nombres',
            'apellidos',
            'edad',
            'donador',
        ]