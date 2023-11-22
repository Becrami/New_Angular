import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string ="https://apirest-2fb0f-default-rtdb.firebaseio.com/v17topList";
  apiurl: string = "https://paises-a8a38-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient) { }

  getListlanguages(): Observable<any> 
  {
    let getUrl = this.url + ".json"
    return this.http.get(getUrl)
  }

  postlanguages(body:any): Observable<any>
  {
    let postUrl = this.url + ".json"
    return this.http.post(postUrl, body) 
  }

  deletelanguages(id:string): Observable<any>
  {
    let delUrl = this.url + "/" + id + ".json"
    return this.http.delete(delUrl)
  }

  updateLanguage(id:string, body:any): Observable<any>
  {
    let uptUrl = this.url + "/" + id + ".json"
    return this.http.put(uptUrl, body) 
  }
}
