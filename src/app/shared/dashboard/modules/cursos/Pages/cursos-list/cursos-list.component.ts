
import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/core/services/curso.service';
import { AuthService } from 'src/app/core/services/auth.service';




@Component({
  selector: 'app-cursos-list',
  standalone: false,
  templateUrl: './cursos-list.component.html',
})
export class CursosListComponent implements OnInit {
  cursos: any[] = [];
  rol: string | null = null;

  constructor(private cursoService: CursoService, private authService: AuthService) {}

  ngOnInit(): void {
  this.cursoService.Cursoss$.subscribe((cursos) => {
    this.cursos = cursos;
  });
  this.rol = this.authService.getRol();
}

}
