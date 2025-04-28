import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  standalone: false,
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit {
  alumnoForm: FormGroup;
  alumnoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.alumnoId = +id;
        // TODO: traer alumno para editar
        this.loadAlumno(this.alumnoId);
      }
    });
  }

  loadAlumno(id: number) {
    const alumnoMock: Alumno = {
      id,
      nombre: 'Alumno de prueba',
      apellido: 'Apellido de prueba',
      email: 'email@prueba.com',
      cursoId: 888,
    };
    this.alumnoForm.patchValue(alumnoMock);
  }
  guardar() {
    if (this.alumnoForm.valid) {
      const alumno: Alumno = {
        id: this.alumnoId ?? Date.now(),
        ...this.alumnoForm.value,
        cursoId: 1 
      };

      console.log('Alumno guardado:', alumno);

      this.router.navigate(['/dashboard/alumnos']);
    } else {
      this.alumnoForm.markAllAsTouched();
    }
  }

  cancelar() {
    this.router.navigate(['/dashboard/alumnos']);
  }
  
}
