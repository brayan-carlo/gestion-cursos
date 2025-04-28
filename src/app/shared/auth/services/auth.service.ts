import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: { email: string, role: 'admin' | 'user' } | null = null;

  login(email: string, password: string): boolean {
    // Simulación de usuarios
    if (email === 'admin@admin.com' && password === 'admin') {
      this.currentUser = { email, role: 'admin' };
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      return true;
    } else if (email === 'user@user.com' && password === 'user') {
      this.currentUser = { email, role: 'user' };
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    if (!this.currentUser) {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.currentUser = JSON.parse(userData);
      }
    }
    return this.currentUser;
  }
}
