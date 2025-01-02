import { DataService } from './../shared/data.service';
// card.effects.ts
import { Injectable } from '@angular/core';
import { createEffect,Actions, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadData, loadCardDetailsSuccess, loadCardDetailsFailure } from './invoice.actions';
@Injectable()
export class CardEffects {

    loadCardDetails$ = createEffect(() =>
        this.actions$.pipe(
          // Listen for the 'loadCardDetails' action
          ofType(loadData),
          mergeMap(() =>
            // Call the service method to fetch data
            this.dataService.getData().pipe(
              // On success, dispatch 'loadCardDetailsSuccess' with the fetched data
              map((cardInfo) => loadCardDetailsSuccess({ cardInfo })),
              // On error, dispatch 'loadCardDetailsFailure' with the error message
              catchError((error) => of(loadCardDetailsFailure({ error: error.message })))
            )
          )
        )
      );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
