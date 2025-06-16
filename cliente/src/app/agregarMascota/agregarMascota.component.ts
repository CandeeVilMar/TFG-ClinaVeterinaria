import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-agregar-mascota',
  standalone: true,
  templateUrl: './agregarMascota.component.html',
  styleUrls: ['./agregarMascota.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AgregarMascotaComponent {
  mascotaForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      raza: ['', Validators.required],
      tipo: ['', Validators.required],
      peso: ['', Validators.required]
    });
  }

    onSubmit() {
    if (this.mascotaForm.valid) {
      this.http.post('http://localhost:3000/api/mascotas', this.mascotaForm.value)
        .subscribe({
          next: (response) => {
            console.log('Mascota guardada:', response);
            alert('Mascota guardada correctamente');
            this.mascotaForm.reset();
          },
          error: (error) => {
            console.error('Error al guardar la mascota:', error);
            alert('Error al guardar la mascota');
          }
        });
    }
  }

}
