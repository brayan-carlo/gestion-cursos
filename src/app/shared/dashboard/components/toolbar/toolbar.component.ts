import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DrawerService } from 'src/app/core/services/drawer.service.ts.service';
import { Usuario } from 'src/app/models/usuario.model';






@Component({
  standalone: false,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
 
})
export class ToolbarComponent {

  usuario: Usuario | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private drawerService: DrawerService

  ) {}


  ngOnInit() {
    this.usuario = this.authService.getUsuarioActual();
    console.log('Usuario actual:', this.usuario?.nombre, this.usuario?.apellido);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }
}
