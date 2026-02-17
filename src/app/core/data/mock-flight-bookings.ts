import { FlightBooking } from '../models/flight-booking.model';

export const MOCK_FLIGHT_BOOKINGS: FlightBooking[] = [
  {
    id: 'FB-23091',
    passengerName: 'Avery Johnson',
    routeCode: 'UA 221',
    from: 'SFO',
    to: 'JFK',
    departureTime: '2026-02-19T08:15:00',
    arrivalTime: '2026-02-19T16:40:00',
    gate: 'A12',
    status: 'boarding',
    priceUsd: 438
  },
  {
    id: 'FB-23092',
    passengerName: 'Sophia Williams',
    routeCode: 'DL 113',
    from: 'LAX',
    to: 'SEA',
    departureTime: '2026-02-19T09:30:00',
    arrivalTime: '2026-02-19T12:10:00',
    gate: 'C08',
    status: 'confirmed',
    priceUsd: 229
  },
  {
    id: 'FB-23093',
    passengerName: 'Liam Martinez',
    routeCode: 'AA 874',
    from: 'ORD',
    to: 'MIA',
    departureTime: '2026-02-19T11:45:00',
    arrivalTime: '2026-02-19T16:05:00',
    gate: 'B19',
    status: 'delayed',
    priceUsd: 312
  },
  {
    id: 'FB-23094',
    passengerName: 'Noah Thompson',
    routeCode: 'AS 449',
    from: 'SEA',
    to: 'DEN',
    departureTime: '2026-02-20T07:05:00',
    arrivalTime: '2026-02-20T10:30:00',
    gate: 'D03',
    status: 'confirmed',
    priceUsd: 276
  },
  {
    id: 'FB-23095',
    passengerName: 'Mia Robinson',
    routeCode: 'SW 552',
    from: 'AUS',
    to: 'LAS',
    departureTime: '2026-02-20T15:00:00',
    arrivalTime: '2026-02-20T17:20:00',
    gate: 'E11',
    status: 'completed',
    priceUsd: 198
  }
];
