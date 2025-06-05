import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';
  private usuarioActual: Usuario | null = null;

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  obtenerUsuarioPorEmail(email: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}?email=${email}`);
  }

  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  validarCredenciales(email: string, password: string): Observable<Usuario | null> {
    return new Observable(observer => {
      this.obtenerUsuarioPorEmail(email).subscribe(usuarios => {
        const usuario = usuarios.find(u => u.password === password);
        observer.next(usuario ?? null);
        observer.complete();
      });
    });
  }

  login(usuario: Usuario): void {
  this.usuarioActual = usuario;
  localStorage.setItem('usuario', JSON.stringify(usuario));
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

logout(): void {
  this.usuarioActual = null;
  localStorage.removeItem('usuario');
}

getRol(): 'admin' | 'usuario' | null {
  const usuario = this.getUsuarioActual();
  return usuario?.rol ?? null;
}
}