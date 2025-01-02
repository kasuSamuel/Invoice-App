import { Routes } from '@angular/router';
import { InvoiceCardComponent } from './invoice-card/invoice-card.component';
import { InvoiceDetailPageComponent } from './invoice-detail-page/invoice-detail-page.component';

export const routes: Routes = [
  { path: 'home-page', component: InvoiceCardComponent },
  { path: 'card-details/:id', component: InvoiceDetailPageComponent },  // Use :id as route parameter
  { path: '', redirectTo: '/home-page', pathMatch: 'full' }, // Default route
];
