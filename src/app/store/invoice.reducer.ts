// card.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadCardDetails, loadCardDetailsSuccess, loadCardDetailsFailure } from './invoice.actions';
import { initialCardState, CardDetailsState } from './invoice.state';

const _cardReducer = createReducer(
  initialCardState,
  on(loadCardDetails, (state, { cardId }) => ({
    ...state,
    cardId,
    loading: true
  })),
  on(loadCardDetailsSuccess, (state, { cardInfo }) => ({
    ...state,
    cardInfo,
    loading: false,
    error: null
  })),
  on(loadCardDetailsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export function cardReducer(state: CardDetailsState | undefined, action: any): CardDetailsState {
  return _cardReducer(state, action);
}
