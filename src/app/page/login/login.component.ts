import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string ="";
  pass:string ="";

  constructor(private authService:AuthService){}

  login(){
    this.authService.loginwithcredentials(this.email, this.pass);
  }

}
