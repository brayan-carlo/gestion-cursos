import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/core/services/curso.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Cursos } from 'src/app/models/curso.model';

@Component({
  selector: 'app-cursos-list',
  standalone: false,
  templateUrl: './cursos-list.component.html',
})
export class CursosListComponent implements OnInit {
  cursos: Cursos[] = [];
  rol: string | null = null;

  constructor(private cursoService: CursoService, private authService: AuthService) {}

  ngOnInit(): void {
    this.cargarCursos();
    this.rol = this.authService.getRol();
  }

  cargarCursos(): void {
    this.cursoService.obtenerCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }
}
