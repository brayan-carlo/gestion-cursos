export interface Cursos {
    id: number;
    Nombre: string;
    duracion: string;
    descripcion: string;
    precio: number;
    avatar: string;
    status: string;
    inicio: string;
    fin: string;
    horas: number;
    clases: number;
    profesor: string;
  }

  // Interface para la creación de nuevos cursos
  export interface Cursoscreate {
    id: string;
    Nombre: string;
    duracion: string;
    descripcion: string;
    precio: number;
    avatar: string;
    status: string;
    inicio: string;
    fin: string;
    horas: number;
    clases: number;
    profesor: string;
  }