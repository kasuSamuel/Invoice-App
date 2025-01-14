import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { loadData, loadDataSuccess, loadDataFailure } from './invoice.actions';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../shared/invoice.interface';
import { switchMap, map, catchError } from 'rxjs/operators'; 
import { of } from 'rxjs';  


@Injectable()
export class CardEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      switchMap(() =>
        this.http.get<Invoice[]>('../../assets/data.json').pipe(
          map((invoices) => loadDataSuccess({ invoices })),
          catchError((error) => of(loadDataFailure({ error: error.message })))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private http: HttpClient,

  ) {}
}
