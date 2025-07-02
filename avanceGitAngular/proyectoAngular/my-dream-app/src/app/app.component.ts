import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Aquí agregamos la importación de RouterModule

@Component({
  selector: 'app-root',
  standalone: true,               // Esto indica que es standalone
  imports: [RouterModule],        // Aquí declaramos que usamos RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name = 'Diego Cervantes';
  email = 'dcervantesapa@unsa.edu.pe';
  webpage = 'http://www.unsa.edu.pe';
}
