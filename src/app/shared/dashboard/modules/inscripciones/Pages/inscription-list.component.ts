import { Component, Input, OnInit } from '@angular/core';
import { InscripcionConAlumno } from 'src/app/models/inscripcion.model';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
import { ActivatedRoute } from '@angular/router';


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

  constructor(
    private route: ActivatedRoute,
    private inscripcionService: InscripcionService,
    private alumnoService: AlumnoService
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

  nuevaInscripcion() {
    console.log('Nueva inscripción');
  }
}
