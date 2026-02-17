export type FlightStatus = 'confirmed' | 'boarding' | 'delayed' | 'completed';

export interface FlightBooking {
  id: string;
  passengerName: string;
  routeCode: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  gate: string;
  status: FlightStatus;
  priceUsd: number;
}

export interface DashboardMetric {
  label: string;
  value: string;
  detail: string;
}
