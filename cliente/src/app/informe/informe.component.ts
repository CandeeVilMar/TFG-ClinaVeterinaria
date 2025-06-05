import { Component } from '@angular/core';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent {
  datosCentro = 'Centro Veterinario Patitas Felices';
  nombreConsulta = 'Consulta general - 01/05/2025';

  mascota = {
    nombre: 'Firulais',
    especie: 'Perro',
    raza: 'Labrador',
    edad: '5 aÃ±os',
    imagen: 'https://via.placeholder.com/200'
  };

  motivo = 'El paciente presenta sÃ­ntomas de letargo, inapetencia y vÃ³mitos intermitentes desde hace dos dÃ­as.';

  generarPDF() {
    // Intentar poner para general el pdf del informe de la mascota
    console.log('Generando PDF...');
  }
}