// card.actions.ts
import { createAction, props } from '@ngrx/store';
import { Invoice } from '../shared/invoice.interface';





export const loadData = createAction('[App] Load Data');
export const loadDataSuccess = createAction(
  '[App] Load  Data Success',
  props<{ invoices: Invoice[] }>()  
);
export const loadDataFailure = createAction(
  '[App] Load Data Failure',
  props<{ error: string }>()
);

export const setInvoiceFilter = createAction('[Filter Data] Set Invoice Filter',
  props<{ status: string }>()
);
export const clearInvoiceFilter = createAction('[Filter Data] Clear Invoice Filter',
  props<{ status: string }>()
);



export const loadCardDetails = createAction(
  '[Card Details Page] Load Card Details',
  props<{ cardId: string }>()
);


export const loadCardDetailsSuccess = createAction(
  '[Card Details Page] Load Card Details Success',
  props<{ cardInfo: Invoice[] }>()  
);

export const loadCardDetailsFailure = createAction(
  '[Card Details Page] Load Card Details Failure',
  props<{ error: string }>()
);



export const addInvoice = createAction(
  '[App] Add Invoice',
  props<{ invoice: Invoice }>()
);

export const updateInvoice = createAction(
  '[App] Update Invoice',
  props<{ invoice: Invoice }>()
);

export const deleteInvoice = createAction(
  '[App] Delete Invoice',
  props<{  cardId: string }>()
);
