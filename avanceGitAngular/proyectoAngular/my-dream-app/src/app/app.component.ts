import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,               
  imports: [RouterModule, CommonModule, UserComponent],      
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['ryan','joe','cameron','john'];
  activated = false;

}

sayHello() {
    alert("Hola desde app.component");
}