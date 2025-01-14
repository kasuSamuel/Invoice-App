// card.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState} from './invoice.state';


export const selectCardState = createFeatureSelector<AppState>('invoice');

export const selectInvoices = createSelector(
  selectCardState,
  (state) => state.invoices
);
export const selectCardLoading = createSelector(
  selectCardState,
  (state) => state.loading
);

export const selectCardError = createSelector(
  selectCardState,
  (state) => state.error
);

export const selectFilteredInvoices = createSelector(
  selectCardState,
  (state) => state.filteredInvoices
);

export const selectFilteredInvoicesCount = createSelector(
  selectCardState,
  (state) => state.filteredInvoices.length
);



