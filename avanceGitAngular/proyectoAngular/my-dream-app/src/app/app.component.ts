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

  
  sayHello() {
    alert("Hola desde app.component");
  }


    deleteUser(user:string){
      for(let i=0; i<this.users.length; i++){
        if(user==this.users[i]){
                    this.users.splice(i,1);
        }
      }
    }
}

