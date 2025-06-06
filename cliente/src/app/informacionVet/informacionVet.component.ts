import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-informacion-vet',
  templateUrl: './informacionVet.component.html',
  standalone: true,
  styleUrls: ['./informacionVet.component.css'],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class InformacionVetComponent {
  descripcion = 'Centro Veterinario especializado en atención integral para mascotas, con más de 10 años de experiencia.';

  empleados = [
   {
      nombre: 'Dra. Laura Garcí­a',
      especialidad: 'Veterinaria general',
      imagen: ''
    },
    {
      nombre: 'Dr. Miguel Rí­os',
     especialidad: 'Cirugí­a y ortopedia',
      imagen: ''
    },
    {
      nombre: 'Dra. Ana López',
      especialidad: 'Asistencia veterinaria',
      imagen: ''
    },
    {
      nombre: 'Dr. Pablo SÃ¡nchez',
      especialidad: 'Diagnóstico por imagen',
      imagen: ''
    }
  ];
}