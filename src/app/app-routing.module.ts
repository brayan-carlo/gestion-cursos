import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/auth/pages/login/login.component';
import { NavbarComponent } from './shared/dashboard/components/navbar/navbar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./shared/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // cuando no ponen nada, redirige al login
  { path: '**', redirectTo: 'login' }, // cuando ponen cualquier otra cosa, también
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
