import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  standalone: true,
  imports: [FormsModule, CommonModule, MatCardModule, HttpClientModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  private apiUrl: string = 'http://localhost:3000/users';

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  onSubmit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((users) => {
      const user = users.find(
        (u) => u.email === this.email && u.password === btoa(this.password)
      );

      if (user) {
        const token = `fake-jwt-token.${btoa(JSON.stringify({ role: user.role, exp: Math.floor(Date.now() / 1000) + 3600 }))}.signature`;
        this.authService.login(token, user);
        this.router.navigate([user.role === 'administrador' ? '/admin' : '/']);
      } else {
        this.errorMessage = 'Usuario o contraseÃ±a incorrectos';
        alert(this.errorMessage);
      }
    }, error => {
      console.error('Error al obtener usuarios:', error);
      alert('Error en la conexiÃ³n con el servidor.');
    });
  }
}