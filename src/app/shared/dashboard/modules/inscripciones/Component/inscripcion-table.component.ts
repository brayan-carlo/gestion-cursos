import { Component, OnInit } from '@angular/core';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
import { CursoService } from 'src/app/core/services/curso.service';
import { Inscripcion } from 'src/app/models/inscripcion.model';
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
  this.router.navigate(['/cursos', curso.id, 'inscripciones']);
}

 ngOnInit(): void {
  this.inscripcionService.inscripciones$.subscribe(inscripciones => {
    this.cursoService.Cursoss$.subscribe(cursos => {
      const cursosMap = new Map(cursos.map(c => [c.id, c]));
      this.cursosInscritos = inscripciones
        .map(i => cursosMap.get(i.cursoId))
        .filter((curso): curso is Cursos => !!curso && curso.status === 'Abierto');
    });
  });
}

}
