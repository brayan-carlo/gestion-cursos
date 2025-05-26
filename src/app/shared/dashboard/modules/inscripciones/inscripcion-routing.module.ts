import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionTableComponent } from './Component/inscripcion-table/inscripcion-table.component';
import { InscriptionListComponent } from './Pages/inscription-list.component';

const routes: Routes = [
  { path: '', component: InscripcionTableComponent },
  { path: ':id/inscripciones', component: InscriptionListComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionRoutingModule {}
