import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListComponent } from './Pages/cursos-list/cursos-list.component';
import { CursosTableComponent } from './components/Cursos-table/cursos-table.component';
import { TableModule } from 'primeng/table';
import { CursosRoutingModule } from './cursos-routing.module';
import { TagModule } from 'primeng/tag';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursosListComponent,
    CursosTableComponent,
    
  ],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    CursosRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
    
  ],
  exports: [
    CursosListComponent  
  ]
})
export class CursosModule { }
