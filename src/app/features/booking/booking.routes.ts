import { Routes } from '@angular/router';

export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    data: { animation: 'BookingPage' },
    loadComponent: () => import('./pages/booking-page/booking-page.component').then((m) => m.BookingPageComponent)
  }
];
