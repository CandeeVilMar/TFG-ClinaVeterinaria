import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';

interface LoginResponse {
  token: string;
  rol: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.errorMessage = ''; // Limpiar error previo

    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor ingresa correo y contraseña';
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (data: LoginResponse) => {
        if (data?.token) {
          this.authService.guardarToken(data.token);

          if (data.rol === 'admin') {
            this.router.navigate(['/agregar-mascota']);
          } else {
            this.router.navigate(['/informe']);
          }
        } else {
          this.errorMessage = 'Respuesta inválida del servidor';
        }
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.errorMessage = 'Correo o contraseña incorrectos';
      }
    });
  }
}
