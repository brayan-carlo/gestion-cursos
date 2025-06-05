import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inscripcion } from 'src/app/models/inscripcion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private apiUrl = 'http://localhost:3000/inscripciones';

  constructor(private http: HttpClient) {}

  obtenerInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(this.apiUrl);
  }

  agregarInscripcion(inscripcion: Omit<Inscripcion, 'id'>): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(this.apiUrl, inscripcion);
  }

  eliminarInscripcion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
