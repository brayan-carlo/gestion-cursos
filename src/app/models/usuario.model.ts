export interface Usuario {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: 'admin' | 'usuario';
    
  }