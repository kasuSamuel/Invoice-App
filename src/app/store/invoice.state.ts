import { Invoice } from '../shared/invoice.interface';

export interface AppState {
  cardId: string | null;
  invoices: Invoice[];
  loading: boolean;
  error: string | null;
  filteredInvoices: Invoice[];
  invoiceStatuses: string[];
}

export const initialCardState: AppState = {
  cardId: null,
  invoices: [],
  loading: false,
  error: null,
  filteredInvoices: [],
  invoiceStatuses: [],
};
