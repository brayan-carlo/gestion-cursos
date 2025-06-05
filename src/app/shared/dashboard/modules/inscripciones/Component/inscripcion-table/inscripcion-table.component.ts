import { Component, OnInit } from '@angular/core';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
import { CursoService } from 'src/app/core/services/curso.service';
import { Cursos } from 'src/app/models/curso.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscripcion-table',
  standalone: false,
  templateUrl: './inscripcion-table.component.html',
  styleUrls: ['./inscripcion-table.component.scss']
})
export class InscripcionTableComponent implements OnInit {

  cursosInscritos: Cursos[] = [];

  constructor(
    private inscripcionService: InscripcionService,
    private cursoService: CursoService,
    private router: Router
  ) {}

  Inscripciones(curso: any) {
  console.log('Curso:', curso);
  console.log('Navegando a: ', `/dashboard/inscripciones/${curso.id}/inscripciones`);
  this.router.navigate(['/dashboard/inscripciones', curso.id, 'inscripciones']);
}

 ngOnInit(): void {
  this.cursoService.obtenerCursos().subscribe(cursos => {
    this.cursosInscritos = cursos.filter(curso => curso.status === 'Abierto');
  });
}


}
