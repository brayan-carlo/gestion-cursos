import { Injectable } from '@angular/core';
import { Cursos } from 'src/app/models/curso.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  
    private CursosSubject = new BehaviorSubject<Cursos[]>( [
      {
        id: 1,
        Nombre: 'Html',
        duracion: '3 meses',
        descripcion: 'Curso de Html',
        precio: 100,
        avatar: 'https://www.w3schools.com/html/img_chania.jpg',
        status: 'Abierto',
        inicio: '2023-10-01',
        fin: '2023-12-31',
      },
      {
        id: 2,
        Nombre: 'Css',
        duracion: '3 meses',
        descripcion: 'Curso de Css',
        precio: 100,
        avatar: 'https://www.w3schools.com/css/img_chania.jpg',
        status: 'Cerrado',
        inicio: '2023-10-01',
        fin: '2023-12-31',
      },
      {
        id: 3,
        Nombre: 'JavaScript',
        duracion: '3 meses',
        descripcion: 'Curso de JavaScript',
        precio: 100,
        avatar: 'https://www.w3schools.com/js/img_chania.jpg',
        status: 'Abierto',
        inicio: '2023-10-01',
        fin: '2023-12-31',
      },
      {
        id: 4,
        Nombre: 'Angular',
        duracion: '3 meses',
        descripcion: 'Curso de Angular',
        precio: 100,
        avatar: 'https://www.w3schools.com/angular/img_chania.jpg',
        status: 'Cerrado',
        inicio: '2023-10-01',
        fin: '2023-12-31',
      }
    ])
  
     Cursoss$: Observable<Cursos[]> = this.CursosSubject.asObservable();
  
  constructor() { }


   editarCurso(CursoEditado: Cursos): void {
      const cursosActuales = this.CursosSubject.getValue();
      const CursossActualizados = cursosActuales.map(cursos =>
        CursoEditado.id === CursoEditado.id ? CursoEditado : cursos
      );
      this.CursosSubject.next(CursossActualizados);
    }
    
  
    eliminarCursos(id: number): void {
      const cursosActuales = this.CursosSubject.getValue();
      const CursossActualizados = cursosActuales.filter(a => a.id !== id);
      this.CursosSubject.next(CursossActualizados);
    }
  
    obtenerCursosPorId(id: number): Cursos | undefined {
      const cursosActuales = this.CursosSubject.getValue();
      return cursosActuales.find(a => a.id === id);
    }
  
    agregarCursos(nuevoCursos: Cursos): void {
      const cursosActuales = this.CursosSubject.getValue();
      const CursossActualizados = [...cursosActuales, nuevoCursos];
      this.CursosSubject.next(CursossActualizados);
    }
}
