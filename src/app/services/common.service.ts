import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { isMissingTranslationError } from '@angular/localize/src/utils';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getDepartmentList(filter:string,status:string,limit:number,offset:number){

    const auth_token=localStorage.getItem("token");
    
      const headers ={'Authorization': "Bearer "+auth_token,
      filter:filter,status:status,limit:limit.toString(),offset:offset.toString()};

      return this.http.get<any>("http://3.108.34.27:5000/admin/department/list",
     {
      headers,      
     })
     
     /*.subscribe(
        (val:any) => {
            console.log("GET call successful value returned in body", 
                        val);
            
           
        },
        (response:any) => {
            console.log("GET call in error", response);
           
        },
        () => {
            console.log("The GET observable is now completed.");
        });

      */
  }
  
}
