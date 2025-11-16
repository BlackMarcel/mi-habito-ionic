import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class ConfiguracionPage {

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
