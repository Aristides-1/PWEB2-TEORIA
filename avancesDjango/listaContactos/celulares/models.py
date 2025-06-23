from django.db import models


#Atributos de clase celulares
class Celulares(models.Model):
    telefono=models.CharField(max_length=10)

