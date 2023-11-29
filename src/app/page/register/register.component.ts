import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email:string ="";
  pass:string ="";

  constructor(private authService:AuthService){}

  guardar(){
    this.authService.register(this.email, this.pass);
  }

}
