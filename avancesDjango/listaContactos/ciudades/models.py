from django.db import models


#Atributos de clase ciudades
class Ciudades(models.Model):
    ciudad=models.TextField()

    def __str__(self):
        return self.ciudad