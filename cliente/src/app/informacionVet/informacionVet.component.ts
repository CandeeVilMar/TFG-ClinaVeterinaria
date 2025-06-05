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
  descripcion = 'Centro Veterinario especializado en atenciÃ³n integral para mascotas, con mÃ¡s de 10 aÃ±os de experiencia.';

  empleados = [
   {
      nombre: 'Dra. Laura GarcÃ­a',
      especialidad: 'Veterinaria general',
      imagen: ''
    },
    {
      nombre: 'Dr. Miguel RÃ­os',
     especialidad: 'CirugÃ­a y ortopedia',
      imagen: ''
    },
    {
      nombre: 'TÃ©c. Ana LÃ³pez',
      especialidad: 'Asistencia veterinaria',
      imagen: ''
    },
    {
      nombre: 'Dr. Pablo SÃ¡nchez',
      especialidad: 'DiagnÃ³stico por imagen',
      imagen: ''
    }
  ];
}