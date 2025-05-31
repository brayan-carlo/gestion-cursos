import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/core/services/curso.service';
import { Cursos } from 'src/app/models/curso.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curso-abm',
  standalone: false,
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class CursoAbmComponent implements OnInit {

  formCurso!: FormGroup;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formCurso = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      duracion: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      avatar: [''],
      estado: ['Abierto', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      horas: [0, [Validators.required, Validators.min(1)]],
      clases: [0, [Validators.required, Validators.min(1)]],
      profesor: ['', Validators.required]
    });
  }

  guardarCurso(): void {
    if (this.formCurso.invalid) {
      this.formCurso.markAllAsTouched();
      return;
    }

    const nuevoCurso: Cursos = {
      id: Math.floor(Math.random() * 1000), 
      Nombre: this.formCurso.value.nombre,
      descripcion: this.formCurso.value.descripcion,
      duracion: this.formCurso.value.duracion,
      precio: this.formCurso.value.precio,
      avatar: this.formCurso.value.avatar,
      status: this.formCurso.value.estado,
      inicio: this.formCurso.value.fechaInicio,
      fin: this.formCurso.value.fechaFin,
      horas: this.formCurso.value.horas,
      clases: this.formCurso.value.clases,
      profesor: this.formCurso.value.profesor,
    };

    console.log('Curso guardado:', nuevoCurso);

    this.cursoService.agregarCursos(nuevoCurso);
    this.router.navigate(['/dashboard/cursos']);
  }

  cancelar(): void {
    this.router.navigate(['/dashboard/cursos']);
  }
}
