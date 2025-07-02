import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,               
  imports: [RouterModule],      
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name: string;
  email: string;
  webpage: string;
  hobbies: string[];



  constructor() {
    console.log("Constructor trabajando");
    this.name = "Diego Cervantes";
    this.email = "dcervantesapa@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programacion", "Netdliox"];
  }

  showhobbies() {
    return true;
  }
}
