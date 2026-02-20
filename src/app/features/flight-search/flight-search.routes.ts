import { Routes } from '@angular/router';

export const FLIGHT_SEARCH_ROUTES: Routes = [
  {
    path: 'search',
    data: { animation: 'FlightSearchPage' },
    loadComponent: () =>
      import('./pages/flight-search-page/flight-search-page.component').then(
        (m) => m.FlightSearchPageComponent
      )
  }
];
