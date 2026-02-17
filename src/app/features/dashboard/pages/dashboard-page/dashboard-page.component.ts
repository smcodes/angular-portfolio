import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FlightDataService } from '../../../../core/services/flight-data.service';
import { DashboardMetric, FlightBooking } from '../../../../core/models/flight-booking.model';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  private readonly flightData = inject(FlightDataService);

  protected readonly metrics: DashboardMetric[] = this.flightData.getDashboardMetrics();
  protected readonly bookings: FlightBooking[] = this.flightData.getBookings();

  protected trackById(_: number, booking: FlightBooking): string {
    return booking.id;
  }
}
