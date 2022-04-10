import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username:string,password:string){

     return this.http.post<any>("http://3.108.34.27:5000/test/auth/login",
      {username:username,password:password})
      
  }
  
}
