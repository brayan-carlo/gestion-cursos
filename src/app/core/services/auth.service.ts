import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private usuariosSubject = new BehaviorSubject<Usuario[]>([
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@example.com', 
      tipoUsuario: 'admin'
    },
    {
      nombre: 'María',
      apellido: 'Gómez',
      email: 'maria.gomez@example.com',
      tipoUsuario: 'user'
    },
    {
      nombre: 'Pedro',
      apellido: 'López',
      email: 'pedro.lopez@example.com',
      tipoUsuario: 'user'
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
      const usuariosActualizados = usuariosActuales.filter(a => a.email !== email);
      this.usuariosSubject.next(usuariosActualizados);
    }

    obtenerUsuarioPorId(email: string): Usuario | undefined {
      const usuariosActuales = this.usuariosSubject.getValue();
      return usuariosActuales.find(a => a.email === email);
    }

    agregarUsuario(nuevoUsuario: Usuario): void {
      const usuariosActuales = this.usuariosSubject.getValue();
      const usuariosActualizados = [...usuariosActuales, nuevoUsuario];
      this.usuariosSubject.next(usuariosActualizados);
      console.log('Usuario agregado:', nuevoUsuario);
    }
}

