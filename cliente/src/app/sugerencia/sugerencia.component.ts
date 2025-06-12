import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  standalone: true,
  styleUrls: ['./sugerencia.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class SugerenciaComponent {
  sugerenciaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sugerenciaForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      sugerencia: ['', Validators.required]
    });
  }

  enviarSugerencia(): void {
    if (this.sugerenciaForm.valid) {
      console.log('Sugerencia enviada:', this.sugerenciaForm.value);
      //tengo que ver la lógica para enviar
      this.sugerenciaForm.reset();
    }
  }
}