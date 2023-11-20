import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string ="https://apirest-2fb0f-default-rtdb.firebaseio.com/v17topList.json"

  constructor(private http: HttpClient) { }

  getlenguajes(): Observable<any> 
  {
    return this.http.get(this.url)
  }
}
