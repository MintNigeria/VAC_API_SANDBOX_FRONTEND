import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppResponseInterface } from 'src/app/types/appState.interface';

@Injectable()
export class SecurityEffects {
  constructor(
    private action$: Actions,
    private appStore: Store<AppResponseInterface>
  ) {}
}
