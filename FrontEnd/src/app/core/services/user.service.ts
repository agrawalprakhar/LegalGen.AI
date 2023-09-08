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
  getToken(token: string | null): Observable<any> {
    return this.http.get<any>(`https://localhost:44330/api/user/token?token=${token}`)
  }
  updateProfile(id: number, data: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put<any>(`https://localhost:44330/api/user/${id}`, data, { headers: headers });
  }
  // forgot(email: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.post<any>(`https://localhost:7204/forgot?email=${email}`, { headers: headers });
  // }
  updatePassword(password: string, token: string | null): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`https://localhost:44330/api/user/update-password?password=${password}&token=${token}`, { headers: headers });
  }
  resetPassword(email: string, newPassword: string): Observable<any> {
    const requestBody = { email, newPassword };
    return this.http.post<any>(`https://localhost:44330/api/user/reset-password`, requestBody);
  }
}
