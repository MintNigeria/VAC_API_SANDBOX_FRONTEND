import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppResponseInterface } from 'src/app/types/appState.interface';
import { TestEnvironmentService } from 'src/app/core/services/test-environment/test-environment.service';
import { createEncryptionAndDecryption, createEncryptionAndDecryptionSuccess, getEncryptionAndDecryption, getEncryptionAndDecryptionSuccess } from './action';
import { switchMap,map } from 'rxjs';
import { setAPIResponseMessage } from '../shared/app.action';

@Injectable()
export class SecurityEffects {
  constructor(
    private actions$: Actions,
    private appStore: Store<AppResponseInterface>,
    private testEnviromentService: TestEnvironmentService
  ) {}

  getEncryptionAndDecryption$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getEncryptionAndDecryption),
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
        
        return this.testEnviromentService.getEncryptionKeysWithInstitutionId(action.id)
          .pipe(
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
              return getEncryptionAndDecryptionSuccess({
                payload: data.payload
                  
              });
            })
          );
      })
    );
  });
  CreateEncryptionDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createEncryptionAndDecryption),
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
      
        const {id, payload } = action;
        return this.testEnviromentService.createOrUpdateInstitutionEncryptionKeys(id, payload).pipe(
          map((data: any) => {
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
            return createEncryptionAndDecryptionSuccess({
              payload: data.payload
            });
          })
        );
      })
    );
  });


}
