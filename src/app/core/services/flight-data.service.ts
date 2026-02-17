import { Injectable } from '@angular/core';
import { MOCK_FLIGHT_BOOKINGS } from '../data/mock-flight-bookings';
import { DashboardMetric, FlightBooking } from '../models/flight-booking.model';

@Injectable({ providedIn: 'root' })
export class FlightDataService {
  getBookings(): FlightBooking[] {
    return MOCK_FLIGHT_BOOKINGS;
  }

  getDashboardMetrics(): DashboardMetric[] {
    const bookings = this.getBookings();
    const confirmed = bookings.filter((booking) => booking.status === 'confirmed').length;
    const boarding = bookings.filter((booking) => booking.status === 'boarding').length;
    const delayed = bookings.filter((booking) => booking.status === 'delayed').length;
    const revenue = bookings.reduce((total, booking) => total + booking.priceUsd, 0);

    return [
      {
        label: 'Confirmed',
        value: confirmed.toString(),
        detail: 'Active confirmed bookings'
      },
      {
        label: 'Boarding',
        value: boarding.toString(),
        detail: 'Flights currently boarding'
      },
      {
        label: 'Delayed',
        value: delayed.toString(),
        detail: 'Flights needing follow-up'
      },
      {
        label: 'Revenue',
        value: `$${revenue.toLocaleString('en-US')}`,
        detail: 'Ticket value in the queue'
      }
    ];
  }
}
