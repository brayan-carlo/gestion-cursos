import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionTableComponent } from './Component/inscripcion-table.component';


const routes: Routes = [
  { path: '', component: InscripcionTableComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionRoutingModule {}
