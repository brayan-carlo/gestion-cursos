import { Component, Input, OnInit } from '@angular/core';
import { InscripcionConAlumno } from 'src/app/models/inscripcion.model';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SeleccionarAlumnoDialogComponent } from 'src/app/shared/dashboard/modules/inscripciones/Component/Selector-dialog/seleccionar-alumno-dialog.component';

@Component({
  selector: 'app-inscripciones-table',
  standalone: false,
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.scss'],
})

export class InscriptionListComponent implements OnInit {
  cursoId!: number;
  inscripciones: InscripcionConAlumno[] = [];
  filtro: string = '';
  columnas: string[] = ['id', 'nombre', 'apellido', 'email', 'acciones'];
  alumnosNoInscritos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private inscripcionService: InscripcionService,
    private alumnoService: AlumnoService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  this.cursoId = Number(this.route.snapshot.paramMap.get('id'));
  this.cargarInscripciones();
}

  cargarInscripciones() {
  this.inscripcionService.inscripciones$.subscribe(inscripciones => {
    const delCurso = inscripciones.filter(i => i.cursoId === this.cursoId);

    this.alumnoService.obtenerAlumnos().subscribe(alumnos => {
      this.inscripciones = delCurso.map(inscripcion => {
        const alumno = alumnos.find(a => a.id === inscripcion.alumnoId);
        return {
          ...inscripcion,
          alumno: alumno! 
        };
      });

      const idsInscritos = delCurso.map(i => i.alumnoId);
      this.alumnosNoInscritos = alumnos.filter(a => !idsInscritos.includes(a.id));
    });
  });
}

  eliminarInscripcion(inscripcion: InscripcionConAlumno) {
    if (confirm(`¿Eliminar inscripción de ${inscripcion.alumno.nombre}?`)) {
      this.inscripcionService.eliminarInscripcion(inscripcion.id);
      this.inscripciones = this.inscripciones.filter(i => i.id !== inscripcion.id);
    }
  }

  inscripcionesFiltradas(): InscripcionConAlumno[] {
    const f = this.filtro.toLowerCase();
    return this.inscripciones.filter(i =>
      i.alumno.nombre.toLowerCase().includes(f) ||
      i.alumno.apellido.toLowerCase().includes(f) ||
      i.alumno.email.toLowerCase().includes(f)
    );
  }

  agregarAlumno(alumno: any) {
  this.inscripcionService.agregarInscripcion({
    alumnoId: alumno.id,
    cursoId: this.cursoId,
    fechaInscripcion: new Date()
  });
  this.cargarInscripciones(); 
}

abrirDialogoSeleccion() {
  const dialogRef = this.dialog.open(SeleccionarAlumnoDialogComponent, {
    width: '400px',
    data: { alumnos: this.alumnosNoInscritos }
  });

  dialogRef.afterClosed().subscribe(alumno => {
    if (alumno) {
      this.agregarAlumno(alumno);
    }
  });
  }

}
