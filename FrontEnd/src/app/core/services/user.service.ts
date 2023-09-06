import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  // registerUser(data: any[]): Observable<any[]> {
  //   return this.http.post<any[]>("https://localhost:7204/api/User", data)
  // }

  login(data: any) {
    // this.http.post("http://localhost:5000/login",data).subscribe((result:any)=>{
    // console.warn(result);
    // localStorage.setItem("token",result.token);
    // this.router.navigate('/path');
    // }
    // )
  }
  
  // logout(token: string | null) : Observable<any> {

  //   return this.http.get<any>(`https://localhost:7204/api/User/logut?token=${token}`);
  // }
}
