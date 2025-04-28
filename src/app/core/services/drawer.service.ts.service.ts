import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private toggleDrawerSubject = new Subject<void>();

  toggleDrawer$ = this.toggleDrawerSubject.asObservable();

  toggleDrawer() {
    this.toggleDrawerSubject.next();
  }
}
