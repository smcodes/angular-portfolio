import { Booking, Passenger } from '../../models/booking.model';

export interface BookingDraft {
  flightId: string | null;
  passengers: Passenger[];
  seatIds: string[];
  addons: {
    bags: number;
    mealCode: string | null;
    insurance: boolean;
  };
}

export interface BookingState {
  draft: BookingDraft;
  confirming: boolean;
  confirmedBooking: Booking | null;
  error: string | null;
}

export const initialBookingState: BookingState = {
  draft: {
    flightId: null,
    passengers: [],
    seatIds: [],
    addons: {
      bags: 0,
      mealCode: null,
      insurance: false
    }
  },
  confirming: false,
  confirmedBooking: null,
  error: null
};

export const BookingActionTypes = {
  UpdatePassengerForm: '[Booking] Update Passenger Form',
  UpdateAddons: '[Booking] Update Addons',
  ConfirmBooking: '[Booking] Confirm Booking',
  ConfirmBookingSuccess: '[Booking] Confirm Booking Success',
  ConfirmBookingFailure: '[Booking] Confirm Booking Failure',
  ResetBookingDraft: '[Booking] Reset Booking Draft'
} as const;
