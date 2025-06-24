from django.db import models

#Atributos de clase persona
class Personas(models.Model):
    nombres=models.CharField(max_length=30)
    apellidos=models.CharField(max_length=40)
    edad=models.IntegerField()

    def __str__(self):
        return self.nombres