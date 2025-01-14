// card.reducer.ts
import { createReducer, on } from '@ngrx/store';
import {
  loadData,
  loadCardDetails,
  loadCardDetailsSuccess,
  loadCardDetailsFailure,
  loadDataSuccess,
  loadDataFailure,
  setInvoiceFilter,
  clearInvoiceFilter,
  addInvoice,
  updateInvoice,
  deleteInvoice,
} from './invoice.actions';
import { initialCardState } from './invoice.state';

export const cardReducer = createReducer(
  initialCardState,

  on(loadData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadDataSuccess, (state, { invoices }) => ({
    ...state,
    invoices,
    filteredInvoices: invoices,
    loading: false,
    error: null,
  })),












  // on(addInvoice, (state, { invoice }) => ({
  //   ...state,
  //   invoices: [...state.invoices, invoice], // Add the new invoice to the list
  //   filteredInvoices: [...state.filteredInvoices, invoice], // Optionally update filteredInvoices as well
  // })),
  
  // // Update invoice - When an existing invoice is updated
  // on(updateInvoice, (state, { invoice }) => ({
  //   ...state,
  //   invoices: state.invoices.map(item =>
  //     item.id === invoice.id ? { ...item, ...invoice } : item
  //   ),
  //   filteredInvoices: state.filteredInvoices.map(item =>
  //     item.id === invoice.id ? { ...item, ...invoice } : item
  //   ),
  // })),
  
  // // Delete invoice - When an invoice is deleted
  // on(deleteInvoice, (state, { cardId }) => ({
  //   ...state,
  //   invoices: state.invoices.filter(invoice => invoice.id !== cardId),
  //   filteredInvoices: state.filteredInvoices.filter(invoice => invoice.id !== cardId),
  // })),
  

















  
  on(loadDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(setInvoiceFilter, (state, { status }) => {
    const updatedStatus = state.invoiceStatuses.includes(status)
      ? state.invoiceStatuses
      : [...state.invoiceStatuses, status];

    const filteredInvoices = state.invoices.filter((invoice) =>
      updatedStatus.includes(invoice.status)
    );

    return {
      ...state,
      invoiceStatuses: updatedStatus,
      filteredInvoices,
    };
  }),

  on(clearInvoiceFilter, (state, { status }) => {
    const updatedStatus = state.invoiceStatuses.filter(
      (selectedStatus) => selectedStatus !== status
    );

    const filterInvoices = updatedStatus.length
      ? state.invoices.filter((invoice) =>
          updatedStatus.includes(invoice.status)
        )
      : state.invoices;

    return {
      ...state,
      invoiceStatuses: updatedStatus,
      filteredInvoices: filterInvoices,
    };
  }),

  on(loadCardDetails, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadCardDetailsSuccess, (state, { cardInfo }) => ({
    ...state,
    cardInfo,
    loading: false,
    error: null,
  })),
  on(loadCardDetailsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
