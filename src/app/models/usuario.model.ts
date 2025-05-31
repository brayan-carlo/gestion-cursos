export interface Usuario {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    direccion: string;
    telefono: string;
    rol: 'admin' | 'usuario';
    
  }