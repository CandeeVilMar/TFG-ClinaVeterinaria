import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    LayoutModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isSmallScreen = false;
  isAdmin = false;
  isAuthenticated = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });

    // Detectar si está autenticado
    this.isAuthenticated = this.authService.isAuthenticated();
    
    // Detectar si es admin
    const role = this.authService.getRole();
    this.isAdmin = role === 'admin';
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.isAdmin = false;
  }
}
