import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/auth/pages/login/login.component';


/*const routes: Routes = [
  { path: 'login', component: LoginComponent },
 
 
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./shared/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },


  { path: '', redirectTo: 'login', pathMatch: 'full' }, // cuando no ponen nada, redirige al login
  { path: '**', redirectTo: 'login' }, // cuando ponen cualquier otra cosa, también
];
*/


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./shared/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./shared/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
