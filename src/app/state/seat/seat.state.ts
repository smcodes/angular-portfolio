import { Seat, SeatLock } from '../../models/seat.model';

export interface SeatState {
  flightId: string | null;
  seatMap: Seat[];
  selectedSeatIds: string[];
  activeLock: SeatLock | null;
  syncStatus: 'CONNECTED' | 'DISCONNECTED' | 'RECONNECTING';
  loading: boolean;
  error: string | null;
}

export const initialSeatState: SeatState = {
  flightId: null,
  seatMap: [],
  selectedSeatIds: [],
  activeLock: null,
  syncStatus: 'DISCONNECTED',
  loading: false,
  error: null
};

export const SeatActionTypes = {
  LoadSeatMap: '[Seat] Load Seat Map',
  LoadSeatMapSuccess: '[Seat] Load Seat Map Success',
  LoadSeatMapFailure: '[Seat] Load Seat Map Failure',
  OptimisticSeatSelect: '[Seat] Optimistic Seat Select',
  LockSeatSuccess: '[Seat] Lock Seat Success',
  LockSeatFailure: '[Seat] Lock Seat Failure',
  ReleaseSeat: '[Seat] Release Seat',
  SeatLockExpired: '[Seat] Seat Lock Expired',
  SeatEventReceived: '[Seat] Seat Event Received'
} as const;
