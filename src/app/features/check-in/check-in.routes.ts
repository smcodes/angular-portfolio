import { Routes } from '@angular/router';

export const CHECK_IN_ROUTES: Routes = [
  {
    path: '',
    data: { animation: 'CheckInPage' },
    loadComponent: () => import('./pages/check-in-page/check-in-page.component').then((m) => m.CheckInPageComponent)
  }
];
