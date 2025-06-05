import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this.authStatus.next(!!token);
    }
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  login(token: string, user: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
      localStorage.setItem('rol', user.rol); // Guardamos el rol
      this.authStatus.next(true);
    }
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('rol'); // Quitamos tambiÃ©n el rol
      this.authStatus.next(false);
    }
  }

  getRole(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('rol');
    }
    return null;
  }
}