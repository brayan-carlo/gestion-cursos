import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { InscripcionTableComponent } from './Component/inscripcion-table.component';
import { InscripcionRoutingModule } from './inscripcion-routing.module';

@NgModule({
  declarations: [
    InscripcionTableComponent  
  ],
  imports: [
    CommonModule,
    InscripcionRoutingModule,
    MatButtonModule
  ]
})
export class InscripcionesModule { }
