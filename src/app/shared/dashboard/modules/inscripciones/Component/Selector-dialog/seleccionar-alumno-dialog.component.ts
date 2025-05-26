import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-seleccionar-alumno-dialog',
  standalone: false,
  templateUrl: './seleccionar-alumno-dialog.component.html',
})
export class SeleccionarAlumnoDialogComponent {
  filtro = '';
  alumnosFiltrados: Alumno[];

  constructor(
    public dialogRef: MatDialogRef<SeleccionarAlumnoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { alumnos: Alumno[] }
  ) {
    this.alumnosFiltrados = data.alumnos;
  }

  filtrar() {
    const texto = this.filtro.toLowerCase();
    this.alumnosFiltrados = this.data.alumnos.filter(a =>
      a.nombre.toLowerCase().includes(texto)
    );
  }

  seleccionar(alumno: Alumno) {
    this.dialogRef.close(alumno);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
