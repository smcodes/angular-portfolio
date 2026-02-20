export type BookingStatus =
  | 'DRAFT'
  | 'PENDING_PAYMENT'
  | 'CONFIRMED'
  | 'CANCELLED'
  | 'RESCHEDULED'
  | 'CHECKED_IN';

export interface Passenger {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
}

export interface Booking {
  bookingId: string;
  pnr: string;
  flightId: string;
  passengers: Passenger[];
  seatIds: string[];
  status: BookingStatus;
  amountDue: number;
  currency: string;
}
