import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CursoService } from 'src/app/core/services/curso.service';
import { Router } from '@angular/router';
import { Cursos } from "src/app/models/curso.model";
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-cursos-table',
  standalone: false,
  styleUrls: ['./cursos-table.component.scss'],
  templateUrl: './cursos-table.component.html',
})
export class CursosTableComponent implements OnInit {

  @Input() cursos: Cursos[] = [];
  @Output() cursoActualizado = new EventEmitter<void>();

  editandoCursoId: number | null = null;
  rol: string | null = null;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.rol = this.authService.getRol();
  }

  deleteCurso(id: number): void {
    const confirmar = confirm('¿Estás seguro que quieres eliminar este curso?');
    if (confirmar) {
      this.cursoService.eliminarCurso(id).subscribe(() => {
        this.cursoActualizado.emit();
      });
    }
  }

  editarCurso(curso: Cursos): void {
    this.editandoCursoId = curso.id;
    
  }

  guardarCurso(curso: Cursos): void {
  if (curso && curso.id) {
    this.cursoService.editarCurso(curso).subscribe(() => {
      this.cancelarEdicion();
    });
  }
}


  cancelarEdicion(): void {
    this.editandoCursoId = null;
   
  }
}
