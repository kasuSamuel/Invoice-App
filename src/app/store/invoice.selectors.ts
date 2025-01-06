// card.selectors.ts
import { createSelector } from '@ngrx/store';
import { CardDetailsState } from './invoice.state';

export const selectCardState = (state: { card: CardDetailsState }) => state.card;

export const selectCardInfo = createSelector(
  (state: { card: CardDetailsState }) => state.card,
  (card: CardDetailsState) => card.cardInfo
);

export const selectCardLoading = createSelector(
  (state: { card: CardDetailsState }) => state.card,
  (card: CardDetailsState) => card.loading
);

export const selectCardError = createSelector(
  (state: { card: CardDetailsState }) => state.card,
  (card: CardDetailsState) => card.error
);
