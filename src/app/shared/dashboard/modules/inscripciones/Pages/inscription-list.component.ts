//import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'app/core/services/alumno.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-inscripciones-table',
  standalone: false,
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.scss'],

})

export class InscripcionesTableComponent {

 
  
}
