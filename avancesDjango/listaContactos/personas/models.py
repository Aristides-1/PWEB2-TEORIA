from django.db import models

#Atributos de clase persona
class Persona(models.Model):
    nombres=models.CharField(max_length=25, blank=False, null=False)
    apellidos=models.CharField(max_length=35)
    edad = models.IntegerField()
    donador=models.BooleanField(default=False)
    

    def __str__(self):
        return self.nombres