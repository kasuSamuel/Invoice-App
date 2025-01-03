import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { cardReducer } from './store/invoice.reducer';
import { CardEffects } from './store/invoice.effects';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideStore({invoices: cardReducer}), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEffects([CardEffects]),ReactiveFormsModule]
};
