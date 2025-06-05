import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  imports: [CommonModule, NavbarComponent, MatCardModule]
})
export class PrincipalComponent {}