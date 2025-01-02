// card.actions.ts
import { createAction, props } from '@ngrx/store';
import { Invoice } from '../shared/invoice.interface';

export const loadData = createAction('[App] Load Data');
export const loadCardDetails = createAction(
  '[Card Details Page] Load Card Details',
  props<{ cardId: string }>()
);

export const loadCardDetailsSuccess = createAction(
  '[Card Details Page] Load Card Details Success',
  props<{ cardInfo: Invoice[] }>()  // The fetched data is an array of Invoice objects
);

export const loadCardDetailsFailure = createAction(
  '[Card Details Page] Load Card Details Failure',
  props<{ error: string }>()
);


export const toggleTheme = createAction('[Theme] Toggle Theme');
export const setTheme = createAction('[Theme] Set Theme', props<{ theme: 'light' | 'dark' }>());