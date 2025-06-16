import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://server:3000/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string, rol: string }>(this.api, { email, password });
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obtenerRolDesdeToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.rol;
  }

  getRole(): string | null {
    return this.obtenerRolDesdeToken();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}