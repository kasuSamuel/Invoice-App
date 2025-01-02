// card.selectors.ts
import { createSelector } from '@ngrx/store';
import { CardDetailsState } from './invoice.state';

export const selectCardState = (state: { card: CardDetailsState }) => state.card;

export const selectCardInfo = createSelector(
  selectCardState,
  (state: CardDetailsState) => state.cardInfo
);

export const selectCardLoading = createSelector(
  selectCardState,
  (state: CardDetailsState) => state.loading
);

export const selectCardError = createSelector(
  selectCardState,
  (state: CardDetailsState) => state.error
);
