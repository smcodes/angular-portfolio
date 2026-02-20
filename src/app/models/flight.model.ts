export interface FlightSummary {
  flightId: string;
  airline: string;
  from: string;
  to: string;
  departureAt: string;
  arrivalAt: string;
  stops: number;
  price: {
    amount: number;
    currency: string;
  };
}

export interface FlightDetails extends FlightSummary {
  timeline: FlightSegment[];
  fareBreakdown: FareBreakdown;
  seatSnapshot: SeatSnapshot;
}

export interface FlightSegment {
  from: string;
  to: string;
  departureAt: string;
  arrivalAt: string;
  durationMin: number;
}

export interface FareBreakdown {
  base: number;
  tax: number;
  fees: number;
  total: number;
  currency: string;
}

export interface SeatSnapshot {
  available: number;
  locked: number;
  booked: number;
}
