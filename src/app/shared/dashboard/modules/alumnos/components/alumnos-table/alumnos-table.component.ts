import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'app/core/services/alumno.service';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrl: './alumnos-table.component.scss',
  standalone: false,
})
export class AlumnosTableComponent implements OnInit {
  editandoId: number | null = null;
  rol: string | null = null;

  @Input() set alumnos(value: Alumno[]) {
    this.dataSource.data = value;
  }

  @Output() eliminarAlumno = new EventEmitter<number>();
  @Output() editar = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'];
  dataSource = new MatTableDataSource<Alumno>();

  constructor(
    private alumnoService: AlumnoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.rol = this.authService.getRol();

  
    if (this.rol === 'admin') {
      this.displayedColumns.push('acciones');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEliminar(id: number) {
    this.eliminarAlumno.emit(id);
    console.log(`---------Alumno con ID ${id}.-------`);
  }

  edit(id: number) {
    this.editandoId = id;
  }

 guardar(alumno: Alumno) {
  this.alumnoService.editarAlumno(alumno).subscribe(() => {
    this.editandoId = null;
    this.editar.emit(alumno.id);  
  }, error => {
    console.error('Error al editar alumno:', error);
  });
}

}


