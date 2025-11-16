import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logros',
  standalone: true,
  templateUrl: './logros.page.html',
  styleUrls: ['./logros.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class LogrosPage {

  constructor(private router: Router) {}

  irADashboard() {
    this.router.navigate(['/dashboard']);
  }

  irAEstadisticas() {
    this.router.navigate(['/estadisticas']);
  }

  irALogros() {
    // ya estás en logros, pero lo dejamos por coherencia
    this.router.navigate(['/logros']);
  }

  irAConfiguracion() {
    this.router.navigate(['/configuracion']);
  }
}
