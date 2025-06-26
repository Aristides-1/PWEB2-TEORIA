from django.db import models

#Atributos de clase persona
class Personas(models.Model):
    nombres=models.CharField(max_length=25)
    apellidos=models.CharField(max_length=35)
    edad = models.PositiveSmallIntegerField()
    donador=models.BooleanField()

    def __str__(self):
        return self.nombres