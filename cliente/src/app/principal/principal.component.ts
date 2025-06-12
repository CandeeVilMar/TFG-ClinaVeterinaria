import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  imports: [CommonModule, NavbarComponent, MatCardModule, RouterModule]
})
export class PrincipalComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const role = this.authService.getRole();
    if (role === 'admin') {
      this.router.navigate(['/agregar-mascota']);
    }
  }
}
