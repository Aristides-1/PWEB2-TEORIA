from django.db import models


#Atributos de clase ciudades
class Ciudades(models.Model):
    ciudad=models.CharField(max_length=30)

    def __str__(self):
        return self.ciudad