import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string ="";
  pass:string ="";

  constructor(private authService:AuthService, private router: Router){}

  login(){
    this.authService.loginwithcredentials(this.email, this.pass).then(res=>{
      this.router.navigate(["/"]);
    }).catch(error=>{
      console.log(error)
    });
  }

  loginGoogle()
  {
    this.authService.loginwitgoogle().then(res=>{
      this.router.navigate(["/"]);
    }).catch(error=>{
      console.log(error)
    });
  }
}
