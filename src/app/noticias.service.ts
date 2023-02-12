import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(){
    const URL =  `https://inshorts.deta.dev/news?category=all`;
    return this.http.get(URL);
  }
  getCategory(category:string){
    const URL =  `https://inshorts.deta.dev/news?category=${category}`;
    return this.http.get(URL);
  }
}
