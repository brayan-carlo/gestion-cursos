// shared/auth/auth-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
