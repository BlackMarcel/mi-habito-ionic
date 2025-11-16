import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'estadisticas',
    loadComponent: () =>
      import('./pages/estadisticas/estadisticas.page').then((m) => m.EstadisticasPage),
  },
  {
    path: 'logros',
    loadComponent: () =>
      import('./pages/logros/logros.page').then((m) => m.LogrosPage),
  },
  {
    path: 'configuracion',
    loadComponent: () =>
      import('./pages/configuracion/configuracion.page').then((m) => m.ConfiguracionPage),
  },
  {
    path: 'habito-detalle',
    loadComponent: () =>
      import('./pages/habito-detalle/habito-detalle.page').then((m) => m.HabitoDetallePage),
  },
];

