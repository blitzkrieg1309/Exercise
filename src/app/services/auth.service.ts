import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginStatus = false;
  private token = 'auth_token';
  private loginApi = 'http://localhost:8080/api/login';
  private registerApi = 'http://localhost:8080/api/register';
  constructor(private http: HttpClient) {
    this.loginStatus = this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.token);
  }

  isTokenEXpired(): boolean {
    const token = this.getToken();
    if (!token) return true;
    const decoded: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  }

  removeToken(): void {
    localStorage.removeItem(this.token);
  }

  setToken(token: string): void {
    localStorage.setItem(this.token, token);
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.loginApi, data).pipe(
      tap((response) => {
        if (response.token) {
          this.setToken(response.token);
        }
      })
    );
  }

  register(data: {
    username: string;
    password: string;
    email: string;
  }): Observable<any> {
    return this.http.post<any>(this.registerApi, data);
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;
    const decoded: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  }
}
