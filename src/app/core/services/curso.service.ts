import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
    users = [
      {
        name: 'María López',
        email: 'maria@example.com',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      {
        name: 'Carlos Rivera',
        email: 'carlos@example.com',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      {
        name: 'Laura Méndez',
        email: 'laura@example.com',
        avatar: 'https://i.pravatar.cc/150?img=10',
      }
    ];
  
  
  constructor() { }
}
