import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { loadData, loadDataSuccess, loadDataFailure } from './invoice.actions';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators'; 
import { of } from 'rxjs';  
import { AuthService } from '../AuthService/auth.service';


@Injectable()
export class CardEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      switchMap(() =>
        this.authService.getInvoice().pipe(
          map((invoices) => loadDataSuccess({ invoices })),
          catchError((error) => of(loadDataFailure({ error: error.message })))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthService,

  ) {}
}
