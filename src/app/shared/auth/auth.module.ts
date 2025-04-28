import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AuthModule { }
