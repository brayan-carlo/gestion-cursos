
import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/core/services/curso.service';




@Component({
  selector: 'app-cursos-list',
  standalone: false,
  templateUrl: './cursos-list.component.html',
})
export class CursosListComponent implements OnInit {
  cursos: any[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
  this.cursoService.Cursoss$.subscribe((cursos) => {
    this.cursos = cursos;
  });
}

}
