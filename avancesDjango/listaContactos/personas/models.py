from django.db import models

#Atributos de clase persona
class Personas(models.Model):
    nombres=models.textField()
    apellidos=models.textField()
