import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosListComponent } from './pages/alumnos-list/alumnos-list.component';
import { AbmAlumnosComponent } from './pages/abm-alumnos/abm-alumnos.component';
import { AlumnosTableComponent } from './components/alumnos-table/alumnos-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {AlumnosRoutingModule} from './alumnos-routing.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AlumnosListComponent,
    AbmAlumnosComponent,
    AlumnosTableComponent
  ],
  imports: [
    AlumnosRoutingModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AlumnosModule { }