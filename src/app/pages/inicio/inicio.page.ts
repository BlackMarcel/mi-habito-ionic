import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class InicioPage {

  constructor(private router: Router) {}

  irAlDashboard() {
    // Solo navegación de cáscara
    this.router.navigate(['/dashboard']);
  }
}
