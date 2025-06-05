import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoCreate } from 'src/app/models/alumno.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://localhost:3000/alumnos';

  constructor(private http: HttpClient) {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }

  agregarAlumno(nuevoAlumno: AlumnoCreate): Observable<AlumnoCreate> {
    return this.http.post<AlumnoCreate>(this.apiUrl, nuevoAlumno);
  }

 editarAlumno(alumnoEditado: Alumno): Observable<Alumno> {
  return this.http.put<Alumno>(`${this.apiUrl}/${alumnoEditado.id}`, alumnoEditado);
}


  eliminarAlumno(id: string | number): Observable<void> {
  const idNumerico = typeof id === 'string' ? parseInt(id) : id;
  console.log("tipo de id luego de parseInt:", typeof idNumerico);
  return this.http.delete<void>(`${this.apiUrl}/${idNumerico}`);
}

}
