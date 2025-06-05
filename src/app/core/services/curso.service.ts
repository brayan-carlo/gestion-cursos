import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cursos } from 'src/app/models/curso.model';
import { Cursoscreate } from 'src/app/models/curso.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(this.apiUrl);
  }

  obtenerCursoPorId(id: number): Observable<Cursos> {
    return this.http.get<Cursos>(`${this.apiUrl}/${id}`);
  }

  agregarCurso(nuevoCurso: Cursoscreate): Observable<Cursoscreate> {
    return this.http.post<Cursoscreate>(this.apiUrl, nuevoCurso);
  }

  editarCurso(cursoEditado: Cursos): Observable<Cursos> {
    return this.http.put<Cursos>(`${this.apiUrl}/${cursoEditado.id}`, cursoEditado);
  }

  eliminarCurso(id: number): Observable<void> {
    const idNumerico = typeof id === 'string' ? parseInt(id) : id;
    return this.http.delete<void>(`${this.apiUrl}/${idNumerico}`);
  }
}
