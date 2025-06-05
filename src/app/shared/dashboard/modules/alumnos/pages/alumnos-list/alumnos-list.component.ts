import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Alumno } from 'src/app/models/alumno.model';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-alumnos-list',
  standalone: false,
  templateUrl: './alumnos-list.component.html',
  styleUrl: './alumnos-list.component.scss'
})
export class AlumnosListComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>;
  rol: string | null = null;

  constructor(private alumnoService: AlumnoService, private authService: AuthService) {}

  ngOnInit(): void {
    this.cargarAlumnos();
    this.rol = this.authService.getRol();
  }

  cargarAlumnos(): void {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }

  eliminar(id: number): void {
    const confirmar = confirm('¿Estás seguro que quieres eliminar este alumno?');
    if (confirmar) {
      console.log(`---------Alumno con ID ${id}.-------entro al if`);
      this.alumnoService.eliminarAlumno(id).subscribe(() => {
        this.cargarAlumnos(); 
      }, error => {
        console.error(`Error al eliminar el alumno con ID ${id}:`, error);
      });
    }
  }

  editar(alumno: Alumno): void {
   this.cargarAlumnos();
}

}
