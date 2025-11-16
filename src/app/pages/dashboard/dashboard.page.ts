import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class DashboardPage {

  constructor(private router: Router) {}

  irADetalleHabito() {
    this.router.navigate(['/habito-detalle']);
  }

  irAEstadisticas() {
    this.router.navigate(['/estadisticas']);
  }

  irALogros() {
    this.router.navigate(['/logros']);
  }

  irAConfiguracion() {
    this.router.navigate(['/configuracion']);
  }

  volverInicio() {
    this.router.navigate(['/inicio']);
  }
}
