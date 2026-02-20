import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-details-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './flight-details-page.component.html',
  styleUrl: './flight-details-page.component.scss'
})
export class FlightDetailsPageComponent {
  protected readonly flightId = this.route.snapshot.paramMap.get('flightId') ?? 'unknown';

  constructor(private readonly route: ActivatedRoute) {}
}
