import { FlightSummary } from '../../models/flight.model';

export interface SearchCriteria {
  from: string;
  to: string;
  date: string;
  adults: number;
  cabin: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';
}

export interface SearchFilters {
  priceMin?: number;
  priceMax?: number;
  stops?: number[];
  airlines?: string[];
}

export type SearchSort = 'CHEAPEST' | 'FASTEST' | 'EARLIEST';

export interface SearchState {
  criteria: SearchCriteria | null;
  filters: SearchFilters;
  sort: SearchSort;
  results: FlightSummary[];
  loading: boolean;
  error: string | null;
  cacheKey: string | null;
  lastFetchedAt: string | null;
}

export const initialSearchState: SearchState = {
  criteria: null,
  filters: {},
  sort: 'CHEAPEST',
  results: [],
  loading: false,
  error: null,
  cacheKey: null,
  lastFetchedAt: null
};

export const SearchActionTypes = {
  SearchFlights: '[Search] Search Flights',
  SearchFlightsSuccess: '[Search] Search Flights Success',
  SearchFlightsFailure: '[Search] Search Flights Failure',
  SetFilters: '[Search] Set Filters',
  SetSort: '[Search] Set Sort',
  ClearSearch: '[Search] Clear Search'
} as const;
