import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  registerUser(data: any[]): Observable<any[]> {
    return this.http.post<any[]>(`https://localhost:44330/api/user/register`, data)
  }

  // login(data: any) {
  //   this.http.post("https://localhost:44330/api/user/login",data).subscribe((result:any)=>{
  //   console.warn(result);
  //   localStorage.setItem("token",result.token);
  //   // this.router.navigate('/path');
  //   }
  //   )
  // }
  login(logindata: any): Observable<any> {
    debugger
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`https://localhost:44330/api/user/login`, logindata, { headers });
  }
  
  logout(token: string | null) : Observable<any> {

    return this.http.get<any>(`https://localhost:44330/api/user/logout?token=${token}`);
  }
  // forgot(email: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.post<any>(`https://localhost:7204/forgot?email=${email}`, { headers: headers });
  // }
  // getupdatePassword(password: string, token: string | null): Observable<any> {

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.post<any>(`https://localhost:7204/api/User/update-password?password=${password}&token=${token}`, { headers: headers });
  // }
}
