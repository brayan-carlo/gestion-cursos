import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/core/services/alumno.service';

@Component({
  selector: 'app-abm-alumnos',
  standalone: false,
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit {
  alumnoForm: FormGroup;
  alumnoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alumnoService: AlumnoService
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
        this.alumnoService.obtenerAlumnoPorId(this.alumnoId).subscribe(alumno => {
          this.alumnoForm.patchValue({
            nombre: alumno.nombre,
            apellido: alumno.apellido,
            email: alumno.email
          });
        });
      }
    });
  }

  guardar(): void {
    if (this.alumnoForm.valid) {
      if (this.alumnoId) {
        const alumno: Alumno = {
          id: this.alumnoId.toString(),
          ...this.alumnoForm.value
        };
        this.alumnoService.editarAlumno(alumno).subscribe(() => {
          this.router.navigate(['/dashboard/alumnos']);
        });
      } else {
        this.alumnoService.obtenerAlumnos().subscribe(alumnos => {
          const maxId = alumnos.length > 0
            ? Math.max(...alumnos.map(a => a.id ?? 0))
            : 0;

          const nuevoAlumno = {
            id: (maxId + 1).toString(),
            ...this.alumnoForm.value
          };

          this.alumnoService.agregarAlumno(nuevoAlumno).subscribe(() => {
            this.router.navigate(['/dashboard/alumnos']);
          });
        });
      }
    } else {
      this.alumnoForm.markAllAsTouched();
    }
  }

  cancelar(): void {
    this.router.navigate(['/dashboard/alumnos']);
  }
}
