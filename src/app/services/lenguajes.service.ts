import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string ="https://apirest-2fb0f-default-rtdb.firebaseio.com/v17topList";
  private dataSubject = new Subject<any[]>();

  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService ) { }

  getListlanguages(): Observable<any> 
  {
    let getUrl = this.url + ".json"
    return this.http.get<any>(getUrl)
    .pipe(
      tap(data => this.dataSubject.next(data)),
      catchError(error => this.handleError(error))
    );
  }

  postlanguages(body:any): Observable<any>
  {
       if (this.authService.getuser() !== null) {
        let postUrl = this.url + ".json"
        return this.http.post(postUrl, body) 
        .pipe(
          tap(() => this.getListlanguages().subscribe()), // Actualizar datos después de agregar
          catchError(error => this.handleError(error))
        );
    } else {
      // Manejar el caso cuando el usuario no está autenticado
      window.alert('Usuario no autenticado');
      return throwError('Usuario no autenticado');
      
    }
    
   
  }

  deletelanguages(id:string): Observable<any>
  {
    if (this.authService.getuser() !== null) {
      let delUrl = this.url + "/" + id + ".json"
      return this.http.delete(delUrl)
        .pipe(
        tap(() => this.getListlanguages().subscribe()), // Actualizar datos después de eliminar
        catchError(error => this.handleError(error))
      );
    } else {
      // Manejar el caso cuando el usuario no está autenticado
      window.alert('Usuario no autenticado');
      return throwError('Usuario no autenticado');
    }
    
  }

  updateLanguage(id:string, body:any): Observable<any>
  {
    if (this.authService.getuser() !== null) {
      let uptUrl = this.url + "/" + id + ".json"
      return this.http.put(uptUrl, body)
        .pipe(
        tap(() => this.getListlanguages().subscribe()), // Actualizar datos después de actualizar
        catchError(error => this.handleError(error))
      );

    } else {
      // Manejar el caso cuando el usuario no está autenticado
      window.alert('Usuario no autenticado');
      return throwError('Usuario no autenticado');
    }
  }
  private handleError(error: any): Observable<never> {
    console.error('Error in LenguajesService:', error);
    return throwError('Something went wrong, please try again later.');
  }
}
