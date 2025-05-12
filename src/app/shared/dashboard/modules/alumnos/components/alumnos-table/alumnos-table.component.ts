//import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'app/core/services/alumno.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-alumnos-table',
  standalone: false,
  templateUrl: './alumnos-table.component.html',
  styleUrl: './alumnos-table.component.scss',
  
})

export class AlumnosTableComponent {

  constructor(private alumnoService: AlumnoService) {}

  editandoId: number | null = null;
  
  @Input() set alumnos(value: Alumno[]) {
    this.dataSource.data = value;
  }
  @Output() eliminarAlumno = new EventEmitter<number>();

  @Output() editar = new EventEmitter<number>();

  

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'acciones'];
  dataSource = new MatTableDataSource<Alumno>();


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEliminar(id: number) {
    this.eliminarAlumno.emit(id);
  }

  edit(id: number) {
    this.editandoId = id;
  }

  guardar(alumno: Alumno) {
    this.alumnoService.editarAlumno(alumno); 
    this.editandoId = null;
  }
  
  
}
