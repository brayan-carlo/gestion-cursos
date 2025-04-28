import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Alumno } from 'src/app/models/alumno.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumnos-list',
  standalone: false,
  templateUrl: './alumnos-list.component.html',
  styleUrl: './alumnos-list.component.scss'
})
export class AlumnosListComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>;

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }

  eliminar(id: number): void {
    const confirmar = confirm('¿Estás seguro que quieres eliminar este alumno?');
    if (confirmar) {
      this.alumnoService.eliminarAlumno(id);
    }
  }

  editar(alumno: Alumno): void {    
     this.alumnoService.editarAlumno(alumno);
    
  }

}
