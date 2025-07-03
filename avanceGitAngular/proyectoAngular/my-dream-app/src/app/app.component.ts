import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,               
  imports: [RouterModule, CommonModule, HelloWorldComponent],      
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['ryan','joe','cameron','john'];
  activated = false;



  constructor() {
    console.log("Constructor trabajando");
    this.name = "Diego Cervantes";
    this.email = "dcervantesapa@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programacion", "Netdliox"];
    this.showHobbies = false;
  }

  toggleHobbies(){
    this.showHobbies =!this.showHobbies;
  }

  newHobby(hobby:any){
    //console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
}
