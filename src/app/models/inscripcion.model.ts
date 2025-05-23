export interface Inscripcion {
  id: number;
  alumnoId: number;
  cursoId: number;
  fechaInscripcion: Date;
}

import { Alumno } from './alumno.model';



export interface InscripcionConAlumno extends Inscripcion {
  alumno: Alumno;
}