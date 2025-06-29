"""
URL configuration for listaContactos project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from inicio.views import myHomeView
from inicio.views import anotherView
from inicio import views
from personas.views import personaTestView
from personas.views import personasTestView, personaCreateView, personasAnotherCreateView


urlpatterns = [
    path('', myHomeView, name='Página de inicio'),
    path('another/', anotherView, name='otra'),
    path('people', personasTestView, name = 'personas'),
    path('add', personaCreateView, name='AgregarPersonas'),
    path('admin/', admin.site.urls),
    path('anotherAdd', personasAnotherCreateView, name='OtroAgregarPersonas'),
    path('agregar/', personaCreateView, name='createPersona'),

    # Nuevas rutas agregadas
    path('primera/', views.primera, name='primera'),
    path('segunda/', views.segunda, name='segunda'),
    path('tercera/', views.tercera, name='tercera'),
    
]
