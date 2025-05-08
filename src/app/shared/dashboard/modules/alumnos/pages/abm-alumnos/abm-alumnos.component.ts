import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/core/services/alumno.service';


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
        const alumno = this.alumnoService.obtenerAlumnoPorId(this.alumnoId);
        if (alumno) {
          this.alumnoForm.patchValue({
            nombre: alumno.nombre,
            apellido: alumno.apellido,
            email: alumno.email
          });
        }
      }
    });
  }
  
  guardar() {
    if (this.alumnoForm.valid) {
      const alumno: Alumno = {
        id: this.alumnoId ?? Date.now(), 
        ...this.alumnoForm.value,
        cursoId: 1
      };
  
      
        this.alumnoService.agregarAlumno(alumno);
      
  
      this.router.navigate(['/dashboard/alumnos']);
    } else {
      this.alumnoForm.markAllAsTouched();
    }
  }
  

  cancelar() {
    this.router.navigate(['/dashboard/alumnos']);
  }
  
}
