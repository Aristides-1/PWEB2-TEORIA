from django.db import models

#Creamos modelo "Movie" que tiene atributos de título, 
class Movie(models.Model):
    title = models.CharField(max_length=32)
    desc = models.CharField(max_length=256)
    year = models.IntegerField()