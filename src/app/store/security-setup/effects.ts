import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppResponseInterface } from 'src/app/types/appState.interface';
import { TestEnvironmentService } from 'src/app/core/services/test-environment/test-environment.service';
import { setupEncryptionAndDecryption, setupEncryptionAndDecryptionSuccess } from './action';
import { switchMap,map } from 'rxjs';
import { setAPIResponseMessage } from '../shared/app.action';

@Injectable()
export class SecurityEffects {
  constructor(
    private action$: Actions,
    private appStore: Store<AppResponseInterface>,
    private testEnviromentService: TestEnvironmentService
  ) {}

  getEncryptionDetails$ = createEffect(() => {
    return this.action$.pipe(
      ofType(setupEncryptionAndDecryption),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIResponseMessage({
            apiResponseMessage: {
              apiResponseMessage: '',
              isLoading: true,
              isApiSuccessful: false,
            },
          })
        );
        
        const {id} = action;
        return this.testEnviromentService
          .getEncryptionKeysWithInstitutionId(id).pipe(
            map((data) => {
              this.appStore.dispatch(
                setAPIResponseMessage({
                  apiResponseMessage: {
                    apiResponseMessage: '',
                    isLoading: false,
                    isApiSuccessful: true,
                  },
                })
              );
              // read data and update payload
              return setupEncryptionAndDecryptionSuccess({
                payload: data.payload
                 
              });
            })
          );
      })
    );
  });

}
