import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnosSubject = new BehaviorSubject<Alumno[]>([
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@example.com',
      cursoId: 1
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'Gómez',
      email: 'marsia.gomez@example.com',
      cursoId: 2
    },
    {
      id: 4,
      nombre: 'rgreg',
      apellido: 'Gómez',
      email: 'marisa.gomez@example.com',
      cursoId: 4
    },
    {
      id: 3,
      nombre: 'ergeg',
      apellido: 'ergerg',
      email: 'margia.gomez@example.com',
      cursoId: 3
    }
  ]);

  alumnos$: Observable<Alumno[]> = this.alumnosSubject.asObservable();

  constructor() {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnos$;
  }
  

  editarAlumno(alumnoEditado: Alumno): void {
    const alumnosActuales = this.alumnosSubject.getValue();
    const alumnosActualizados = alumnosActuales.map(alumno =>
      alumno.id === alumnoEditado.id ? alumnoEditado : alumno
    );
    this.alumnosSubject.next(alumnosActualizados);
  }
  

  eliminarAlumno(id: number): void {
    const alumnosActuales = this.alumnosSubject.getValue();
    const alumnosActualizados = alumnosActuales.filter(a => a.id !== id);
    this.alumnosSubject.next(alumnosActualizados);
  }

  obtenerAlumnoPorId(id: number): Alumno | undefined {
    const alumnosActuales = this.alumnosSubject.getValue();
    return alumnosActuales.find(a => a.id === id);
  }
}
