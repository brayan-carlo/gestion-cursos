import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private inscripcionesSubject = new BehaviorSubject<Inscripcion[]>([
    { id: 1, alumnoId: 1, cursoId: 1, fechaInscripcion: new Date('2023-09-01') },
    { id:2, alumnoId: 2, cursoId: 2, fechaInscripcion: new Date('2023-09-01') },
    { id: 3, alumnoId: 3, cursoId: 3, fechaInscripcion: new Date('2023-09-01') },
    { id: 4, alumnoId: 4, cursoId: 4, fechaInscripcion: new Date('2023-09-01') }

  ]);

  inscripciones$: Observable<Inscripcion[]> = this.inscripcionesSubject.asObservable();

  constructor() {}
}
