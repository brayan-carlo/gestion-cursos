  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';
  import { Usuario } from 'src/app/models/usuario.model';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    private usuarioActual: Usuario | null = null;

    private usuariosSubject = new BehaviorSubject<Usuario[]>([
      {
        nombre: 'Juan',
        apellido: 'Pérez',
        email: 'juan.perez@example.com',
        password: 'admin123',
        rol: 'admin'
      },
      {
        nombre: 'María',
        apellido: 'Gómez',
        email: 'maria.gomez@example.com',
        password: 'user123',
        rol: 'usuario'
      },
      {
        nombre: 'Pedro',
        apellido: 'López',
        email: 'pedro.lopez@example.com',
        password: 'user456',
        rol: 'usuario'
      }
    ]);

    usuarios$: Observable<Usuario[]> = this.usuariosSubject.asObservable();

    constructor() { }

    obtenerUsuarios(): Observable<Usuario[]> {
      return this.usuarios$;
    }

    editarUsuario(usuarioEditado: Usuario): void {
      const usuariosActuales = this.usuariosSubject.getValue();
      const usuariosActualizados = usuariosActuales.map(usuario =>
        usuario.email === usuarioEditado.email ? usuarioEditado : usuario
      );
      this.usuariosSubject.next(usuariosActualizados);
    }

    eliminarUsuario(email: string): void {
      const usuariosActuales = this.usuariosSubject.getValue();
      const usuariosActualizados = usuariosActuales.filter(u => u.email !== email);
      this.usuariosSubject.next(usuariosActualizados);
    }

    obtenerUsuarioPorId(email: string): Usuario | undefined {
      return this.usuariosSubject.getValue().find(u => u.email === email);
    }

    agregarUsuario(nuevoUsuario: Usuario): void {
      const usuariosActuales = this.usuariosSubject.getValue();
      const usuariosActualizados = [...usuariosActuales, nuevoUsuario];
      this.usuariosSubject.next(usuariosActualizados);
      console.log('Usuario agregado:', nuevoUsuario);
    }

    validarCredenciales(email: string, password: string): Usuario | null {
      const usuario = this.usuariosSubject.getValue().find(
        u => u.email === email && u.password === password
      );
      return usuario ?? null;
    }

    login(usuario: Usuario): void {
      this.usuarioActual = usuario;
      localStorage.setItem('usuario', JSON.stringify(usuario));
    }

    logout(): void {
      this.usuarioActual = null;
      localStorage.removeItem('usuario');
    }

    getRol(): 'admin' | 'usuario' | null {
      if (!this.usuarioActual) {
        const usuarioLocal = localStorage.getItem('usuario');
        if (usuarioLocal) {
          this.usuarioActual = JSON.parse(usuarioLocal);
        }
      }
      return this.usuarioActual?.rol ?? null;
    }

    getUsuarioActual(): Usuario | null {
      if (!this.usuarioActual) {
        const usuarioLocal = localStorage.getItem('usuario');
        if (usuarioLocal) {
          this.usuarioActual = JSON.parse(usuarioLocal);
        }
      }
      return this.usuarioActual;
    }

    esAdmin(): boolean {
      return this.getRol() === 'admin';
    }

    esUsuario(): boolean {
      return this.getRol() === 'usuario';
    }
  }
