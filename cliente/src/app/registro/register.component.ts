import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    NavbarComponent
  ]
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    phone: '',
    birthday: '',
    gender: '',
    role: '',
    comunidad: '',
    ownerName: '',
    petName: '',
    petAge: '',
    totalPets: ''
  };
  

  private apiUrl: string = 'http://server:3000/api/clientes';
  constructor(private http: HttpClient) {}

  registro(): void {
    if (!this.validateInputs()) return;

    if (!this.user.password) {
      alert('La contraseÃ±a no puede estar vacÃ­a.');
      return;
    }
    
    //CAMBIAR PARA COGER EL SERVIDOR
    this.user.password = btoa(this.user.password);

    this.http.post(this.apiUrl, this.user).subscribe(
      (response: any) => {
        console.log('Registro exitoso', response);
        alert('Usuario registrado correctamente.');
      },
      (error: any) => {
        console.error('Error en el registro', error);
        alert('Error en el registro. IntÃ©ntalo de nuevo.');
      }
    );
  }

  private validateInputs(): boolean {
    if (!this.user.firstName || !this.user.lastName || !this.user.email || !this.user.password) {
      alert('Completa todos los campos obligatorios.');
      return false;
    }
    if (!this.validateEmail(this.user.email)) {
      alert('El formato del correo no es vÃ¡lido.');
      return false;
    }
    if (this.user.password.length < 6) {
      alert('La contraseÃ±a debe tener al menos 6 caracteres.');
      return false;
    }
    return true;
  }

  private validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
}

