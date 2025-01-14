import { Routes } from '@angular/router';
import { InvoiceCardComponent } from './invoice-card/invoice-card.component';
import { AuthGuard } from './auth.guard';

import { InvoiceDetailPageComponent } from './invoice-detail-page/invoice-detail-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home-page', component: InvoiceCardComponent },
  { path: 'card-details/:id', component: InvoiceDetailPageComponent },  // Use :id as route parameter
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];
