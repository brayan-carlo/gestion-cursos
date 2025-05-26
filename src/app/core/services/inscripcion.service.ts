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

  eliminarInscripcion(id: number): void {
  const actuales = this.inscripcionesSubject.getValue();
  const nuevas = actuales.filter(i => i.id !== id);
  this.inscripcionesSubject.next(nuevas);
}

agregarInscripcion(inscripcion: Omit<Inscripcion, 'id'>): void {
  const actuales = this.inscripcionesSubject.getValue();
  const nueva: Inscripcion = {
    ...inscripcion,
    id: actuales.length > 0 ? Math.max(...actuales.map(i => i.id)) + 1 : 1
  };
  this.inscripcionesSubject.next([...actuales, nueva]);
}


}

