import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string ="https://apirest-2fb0f-default-rtdb.firebaseio.com/v17topList";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getListlanguages(): Observable<any> 
  {
    let getUrl = this.url + ".json"
    return this.http.get(getUrl)
  }

  postlanguages(body:any): Observable<any>
  {
       if (this.authService.getuser() !== null) {
        let postUrl = this.url + ".json"
        return this.http.post(postUrl, body) 
        .pipe(
          catchError(error => this.handleError(error))
        );
    } else {
      // Manejar el caso cuando el usuario no está autenticado
      return throwError('Usuario no autenticado');
    }
    
   
  }

  deletelanguages(id:string): Observable<any>
  {
    if (this.authService.getuser() !== null) {
      let delUrl = this.url + "/" + id + ".json"
      return this.http.delete(delUrl)
        .pipe(
          catchError(error => this.handleError(error))
        );
    } else {
      // Manejar el caso cuando el usuario no está autenticado
      return throwError('Usuario no autenticado');
    }
    
  }

  updateLanguage(id:string, body:any): Observable<any>
  {
    if (this.authService.getuser() !== null) {
      let uptUrl = this.url + "/" + id + ".json"
      return this.http.put(uptUrl, body)
        .pipe(
          catchError(error => this.handleError(error))
        );
    } else {
      // Manejar el caso cuando el usuario no está autenticado
      return throwError('Usuario no autenticado');
    }
  }
  private handleError(error: any): Observable<never> {
    console.error('Error in LenguajesService:', error);
    return throwError('Something went wrong, please try again later.');
  }
}
