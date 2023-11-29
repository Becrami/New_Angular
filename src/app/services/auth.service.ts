import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router){}

  register(email:string, pass:string)
  {
    this.auth.createUserWithEmailAndPassword(email, pass).then((res)=>{
      console.log(res)
      this.router.navigate(['/login'])
    })
  }

  loginwithcredentials(user:string, pass:string){
    this.auth.signInWithEmailAndPassword(user, pass).then((res)=>{
      console.log(res)
    })
  }

  async logout(){
    await this.auth.signOut();
    this.router.navigate(['/']);
  }

}