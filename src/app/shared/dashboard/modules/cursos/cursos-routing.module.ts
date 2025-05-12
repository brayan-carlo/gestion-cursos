import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListComponent } from './Pages/cursos-list/cursos-list.component';
import { CursoAbmComponent } from './Pages/abm-cursos/abm-cursos.component';

const routes: Routes = [
  { path: '', component: CursosListComponent },
   { path: 'abm', component: CursoAbmComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
