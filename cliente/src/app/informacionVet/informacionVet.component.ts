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
      nombre: 'Dra. Laura García',
      especialidad: 'Veterinaria general y dermatología',
      imagen: '../../assets/img/laura.jpg'
    },
    {
      nombre: 'Dr. Miguel Ríos',
      especialidad: 'Cirugía y ortopedia',
      imagen: '../../assets/img/miguel.png'
    },
    {
      nombre: 'Téc. Ana López',
      especialidad: 'Asistencia veterinaria',
      imagen: '../../assets/img/ana.jpg'
    },
    {
      nombre: 'Dr. Pablo Sánchez',
      especialidad: 'Diagnóstico por imagen',
      imagen: '../../assets/img/pablo.jpg'
    }
  ];
}