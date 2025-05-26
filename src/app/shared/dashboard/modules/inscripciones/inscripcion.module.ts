import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { InscripcionTableComponent } from './Component/inscripcion-table/inscripcion-table.component';
import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionListComponent } from './Pages/inscription-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { SeleccionarAlumnoDialogComponent } from './Component/Selector-dialog/seleccionar-alumno-dialog.component';



@NgModule({
  declarations: [
    InscripcionTableComponent,
    InscriptionListComponent,
    SeleccionarAlumnoDialogComponent
  ],
  imports: [
    CommonModule,
    InscripcionRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule
  ]
})
export class InscripcionesModule { }
