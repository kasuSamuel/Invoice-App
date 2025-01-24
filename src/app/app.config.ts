import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { cardReducer } from './store/invoice.reducer';
import { CardEffects } from './store/invoice.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { loggerInterceptor } from './logger.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggerInterceptor])),
    provideStore({ invoice: cardReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), autoPause: true}),
    provideEffects([CardEffects]),
    ReactiveFormsModule,
  ],
};
