import { Component, ElementRef, ViewChild } from '@angular/core';

// Declaro html2pdf como una variable global
declare var html2pdf: any;

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
    edad: '5 años',
    imagen: 'https://via.placeholder.com/200'
  };

  motivo = 'El paciente presenta síntomas de letargo, inapetencia y vómitos intermitentes desde hace dos días.';

  @ViewChild('contenidoInforme', { static: false }) contenidoInforme!: ElementRef;

  generarPDF() {
    const options = {
      margin: 10,
      filename: `${this.mascota.nombre}_informe.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(this.contenidoInforme.nativeElement).set(options).save();
  }
}
