import { Routes } from '@angular/router';
import { AppShellComponent } from './core/layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        data: { animation: 'LandingPage' },
        loadComponent: () =>
          import('./features/landing/pages/landing-page/landing-page.component').then(
            (m) => m.LandingPageComponent
          )
      },
      {
        path: 'dashboard',
        data: { animation: 'DashboardPage' },
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard-page/dashboard-page.component').then(
            (m) => m.DashboardPageComponent
          )
      },
      {
        path: 'flights',
        loadChildren: () =>
          import('./features/flight-search/flight-search.routes').then((m) => m.FLIGHT_SEARCH_ROUTES)
      },
      {
        path: 'flight',
        loadChildren: () =>
          import('./features/flight-details/flight-details.routes').then((m) => m.FLIGHT_DETAILS_ROUTES)
      },
      {
        path: 'booking',
        loadChildren: () => import('./features/booking/booking.routes').then((m) => m.BOOKING_ROUTES)
      },
      {
        path: 'payment',
        loadChildren: () => import('./features/payment/payment.routes').then((m) => m.PAYMENT_ROUTES)
      },
      {
        path: 'manage',
        loadChildren: () =>
          import('./features/manage-booking/manage-booking.routes').then((m) => m.MANAGE_BOOKING_ROUTES)
      },
      {
        path: 'check-in',
        loadChildren: () => import('./features/check-in/check-in.routes').then((m) => m.CHECK_IN_ROUTES)
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
