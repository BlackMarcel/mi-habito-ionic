import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habito-detalle',
  standalone: true,
  templateUrl: './habito-detalle.page.html',
  styleUrls: ['./habito-detalle.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HabitoDetallePage {

  constructor(private router: Router) {}

  irADashboard() {
    this.router.navigate(['/dashboard']);
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
}

