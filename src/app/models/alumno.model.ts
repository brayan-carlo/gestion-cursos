export interface Alumno {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
  }

  // Interface para la creación de nuevos alumnos
  export interface AlumnoCreate {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
  }
  