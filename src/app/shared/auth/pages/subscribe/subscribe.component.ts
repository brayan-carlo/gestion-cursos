import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-subscribe',
  standalone: false,
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})

export class SubscribeComponent implements OnInit {
  usuarioForm: FormGroup;
  alumnoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private AuthService: AuthService
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
   
  }
  
  guardar() {
    if (this.usuarioForm.valid) {
      const usuario: Usuario = {
        mail: this.AuthService.agregarUsuario ?? Date.now(), 
        ...this.usuarioForm.value,
      };
  
      this.AuthService.agregarUsuario(usuario);
      this.router.navigate(['/login']);
    } else {
      this.usuarioForm.markAllAsTouched();
    }
  }


  cancelar() {
    this.router.navigate(['/login']);
  }

}
