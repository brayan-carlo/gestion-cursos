import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./modules/alumnos/alumnos.module').then(m => m.AlumnosModule),
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./modules/cursos/cursos.module').then(m => m.CursosModule),
      },
      {
        path: 'inscripciones',
        loadChildren: () =>
          import('./modules/inscripciones/inscripcion.module').then(m => m.InscripcionesModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
