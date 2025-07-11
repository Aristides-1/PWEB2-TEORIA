import { Component, OnInit } from '@angular/core'; // Importamos OnInit para usarlo en lugar del constructor
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ApiService],
  standalone: true,
})
export class AppComponent implements OnInit {
  movies = [{ id: 1, title: 'peli1', year: 2021 }, { id: 2, title: 'peli2', year: 2022 }]; // Películas de ejemplo

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getMovies(); // Llamada a la API cuando el componente se inicializa
  }

  getMovies(): void {
    this.api.getAllMovies().subscribe(
      (data) => {
        console.log('Películas recibidas:', data); // Verifica la respuesta de la API en la consola
        this.movies = data;  // Asignamos los datos obtenidos de la API a la lista 'movies'
      },
      (error) => {
        console.log('Error al obtener películas:', error);
      }
    );
  }
}

