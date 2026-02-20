import { Routes } from '@angular/router';

export const MANAGE_BOOKING_ROUTES: Routes = [
  {
    path: '',
    data: { animation: 'ManageBookingPage' },
    loadComponent: () =>
      import('./pages/manage-booking-page/manage-booking-page.component').then(
        (m) => m.ManageBookingPageComponent
      )
  }
];
