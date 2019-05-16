// Dependencias
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isCollapsed: boolean = true;

  /*
   * Ocultar navbar
   */
  public collapseNavbar(): void {
    if (!this.isCollapsed) {
      // Colapsar barra
      this.isCollapsed = true;
    }
  }
}
