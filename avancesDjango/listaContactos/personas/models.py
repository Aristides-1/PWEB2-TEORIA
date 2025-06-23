from django.db import models

#Atributos de clase persona
class Personas(models.Model):
    nombres=models.TextField()
    apellidos=models.TextField()

    def __str__(self):
        return self.nombres