import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User,
  updateProfile 
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth){}

  getAuthState(): Observable<any> {
    return new Observable((observer) => {
      const unsubscribe = onAuthStateChanged(this.auth, {
        next: (user) => observer.next(user),
        error: (error) => observer.error(error),
        complete: () => observer.complete(),
      });

      // Retornar una función para desuscribirse cuando sea necesario
      return () => unsubscribe();
    });
  }
  getuser(){
    return  this.auth.currentUser;
  }

  register(email:string, pass:string)
  {
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }

  loginwithcredentials(user:string, pass:string){
    return signInWithEmailAndPassword(this.auth, user, pass)
  }

  loginwitgoogle()
  {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }
  actualizarPerfil(nuevoNombre: string, nuevoApellidos: string) {
    const user = this.auth.currentUser;

    if (user) {
      // Actualizar el perfil del usuario
      return updateProfile(user, { displayName: nuevoNombre + ' ' + nuevoApellidos });
    } else {
      // Manejar el caso en que el usuario no esté autenticado
      return Promise.reject(new Error('Usuario no autenticado'));
    }
  }
}