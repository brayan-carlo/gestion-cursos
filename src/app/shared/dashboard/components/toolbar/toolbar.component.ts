import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/services/auth.service';
import { DrawerService } from 'src/app/core/services/drawer.service.ts.service';





@Component({
  standalone: false,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
 
})
export class ToolbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private drawerService: DrawerService

  ) {}

  logout() {
    this.authService.logout();      // Borramos el usuario
    this.router.navigate(['/login1']); // Redirigimos a login
  }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }
}
