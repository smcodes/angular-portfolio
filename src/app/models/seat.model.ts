export type SeatStatus = 'AVAILABLE' | 'LOCKED' | 'BOOKED';

export interface Seat {
  seatId: string;
  cabin: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';
  row: number;
  column: string;
  status: SeatStatus;
  lockOwnerSessionId?: string;
  lockExpiresAt?: string;
}

export interface SeatLock {
  lockId: string;
  flightId: string;
  seatIds: string[];
  expiresAt: string;
}
