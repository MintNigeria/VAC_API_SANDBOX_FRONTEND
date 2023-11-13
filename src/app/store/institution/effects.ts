import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, take } from 'rxjs';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { StorageService } from 'src/app/core/services/shared/storage.service';
import { AppResponseInterface } from 'src/app/types/appState.interface';
import { setAPIResponseMessage } from '../shared/app.action';
import { createEncryptionAndDecryption, createEncryptionAndDecryptionSuccess, createPartnerAPI, createPartnerAPISuccess, getAllInstitutionsDropdown, getAllInstitutionsDropdownSuccess, getEncryptionAndDecryption, invokeSupport, invokeSupportSuccess, updatePartnerAPI, updatePartnerAPISuccess } from './action';
import { UploadsService } from 'src/app/core/services/uploads/uploads.service';



@Injectable()
export class InstitutionEffects {
  constructor(
    private actions$: Actions,
    private storage: StorageService,
    private appStore: Store<AppResponseInterface>,
    private notification: NotificationsService,
    private institutionService: InstitutionService,
    private supportService: UploadsService
  ) {}



  getAllInstitutionsDropdown$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllInstitutionsDropdown),
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
        
        return this.institutionService.getAllInstitutionsDropdown(action.payload)
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
              return getAllInstitutionsDropdownSuccess({
                payload: data.payload
                  
              });
            })
          );
      })
    );
  });

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
        
        return this.institutionService.getEncryptionKeysWithInstitutionId(action.id)
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
              return getAllInstitutionsDropdownSuccess({
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
      
        const {payload, id } = action;
        return this.institutionService.createOrUpdateInstitutionEncryptionKeys(id, payload).pipe(
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

  updatePartnerAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePartnerAPI),
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
        
        return this.institutionService.getAPIDataByInstitutionId(action.id)
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
              return updatePartnerAPISuccess({
                payload: data.payload
                  
              });
            })
          );
      })
    );
  });

  CreatePartnerAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createPartnerAPI),
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
        return this.institutionService.CreateOrUpdateInstitutionEndpoints(id, payload).pipe(
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
            return createPartnerAPISuccess({
              payload: data.payload
            });
          })
        );
      })
    );
  });

  support$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSupport),
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
      
        const {payload } = action;
        return this.supportService.supportNotification( payload).pipe(
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
            return invokeSupportSuccess({
              payload: data.payload
            });
          })
        );
      })
    );
  });
}
