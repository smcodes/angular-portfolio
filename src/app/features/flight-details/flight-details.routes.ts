import { Routes } from '@angular/router';

export const FLIGHT_DETAILS_ROUTES: Routes = [
  {
    path: ':flightId',
    data: { animation: 'FlightDetailsPage' },
    loadComponent: () =>
      import('./pages/flight-details-page/flight-details-page.component').then(
        (m) => m.FlightDetailsPageComponent
      )
  }
];
