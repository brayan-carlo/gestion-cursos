import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/core/services/drawer.service.ts.service';
@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
 
})

export class NavbarComponent implements AfterViewInit {
  
  showFiller = false;

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private drawerService: DrawerService) {}

  ngAfterViewInit() {
    this.drawerService.toggleDrawer$.subscribe(() => {
      this.drawer.toggle(); //abrir/cerrar el drawer
    });
  }
}