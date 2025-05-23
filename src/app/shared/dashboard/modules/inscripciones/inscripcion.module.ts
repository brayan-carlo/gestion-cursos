import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { InscripcionTableComponent } from './Component/inscripcion-table.component';
import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionListComponent } from './Pages/inscription-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    InscripcionTableComponent,
    InscriptionListComponent
    
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
    MatFormFieldModule
  ]
})
export class InscripcionesModule { }
