import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-search-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './flight-search-page.component.html',
  styleUrl: './flight-search-page.component.scss'
})
export class FlightSearchPageComponent {}
