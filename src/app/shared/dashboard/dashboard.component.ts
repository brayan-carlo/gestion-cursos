import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/core/services/drawer.service.ts.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements AfterViewInit {
  
  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(private drawerService: DrawerService) {
    
  }

  ngAfterViewInit() {
    this.drawerService.toggleDrawer$.subscribe(() => {
      this.drawer.toggle();  
    });
  }
} 
