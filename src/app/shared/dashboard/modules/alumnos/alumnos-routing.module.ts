import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListComponent } from './pages/alumnos-list/alumnos-list.component';
import { AbmAlumnosComponent } from './pages/abm-alumnos/abm-alumnos.component';

const routes: Routes = [
  { path: '', component: AlumnosListComponent },
  { path: 'abm', component: AbmAlumnosComponent }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
