import { BookingState, initialBookingState } from './booking/booking.state';
import { SearchState, initialSearchState } from './search/search.state';
import { SeatState, initialSeatState } from './seat/seat.state';
import { UserState, initialUserState } from './user/user.state';

export interface AppState {
  search: SearchState;
  seat: SeatState;
  booking: BookingState;
  user: UserState;
}

export const initialAppState: AppState = {
  search: initialSearchState,
  seat: initialSeatState,
  booking: initialBookingState,
  user: initialUserState
};
