import { Injectable } from '@angular/core';
import{ HttpClientModule, HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';


const API_BASE_URL = "https://jsonplaceholder.typicode.com/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || {};
  }

  //gestions des erreurs
  private handleError(error:HttpErrorResponse){
    let message = "ceci est une érreur";
    if(error.error instanceof ErrorEvent){
      //client-side errors
      message = `Erreur => ${error.error.message}`;
    }else{
      //server-side errors
      message = `Code de l'erreur => ${error.status}\n\nMessage =>${error.message}`;
    }
    window.alert(message);
    return throwError(message);
  }

  //récupération de la liste des utilisateurs
  getUsers(): Observable<any> {
    return this.http.get(API_BASE_URL + "users")
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  //récupération de la liste des articles
  getBlogPosts() : Observable<any> {
    return this.http.get(API_BASE_URL + "posts")
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
