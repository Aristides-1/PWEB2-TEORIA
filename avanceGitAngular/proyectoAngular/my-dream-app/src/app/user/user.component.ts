import { CommonModule } from "@angular/common";
import { Component, OnInit,Input } from "@angular/core";


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    standalone: true,
    imports: [CommonModule],

})

sayhello(nameUser){
    alert("Hola "+nameUser);
}
export class UserComponent implements OnInit {
    @Input() nameUser:any;
    ngOnInit(): void {}
}