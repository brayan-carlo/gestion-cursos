
import { Component, Input } from '@angular/core';
import { CursoService } from 'src/app/core/services/curso.service';
import { Router } from '@angular/router';
import { Cursos } from "src/app/models/curso.model";

@Component({
  selector: 'app-cursos-table',
  standalone: false,
  styleUrls: ['./cursos-table.component.scss'],
  templateUrl: './cursos-table.component.html',
})
export class CursosTableComponent {

 @Input() cursos: Cursos[] = [];
  editandoCursoId: number | null = null;
  cursoEditado: Partial<Cursos> = {};


 constructor(
    private cursoService: CursoService,
    private router: Router
  ) {}

 deleteCurso(id: number): void {
   const confirmar = confirm('¿Estás seguro que quieres eliminar este alumno?');
    if (confirmar) {
       this.cursoService.eliminarCursos(id);
    }
   
  }

  editarCurso(curso: Cursos): void {
  this.editandoCursoId = curso.id;
}

  guardarCurso(curso: Cursos): void {
  this.cursoService.editarCurso(curso);
  this.cancelarEdicion();
}

  cancelarEdicion(): void {
    this.editandoCursoId = null;
    this.cursoEditado = {};
  }

 
}

