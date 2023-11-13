import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, take } from 'rxjs';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { StorageService } from 'src/app/core/services/shared/storage.service';
import { AppResponseInterface } from 'src/app/types/appState.interface';
import { setAPIResponseMessage } from '../shared/app.action';
import { callInstitutionRecordAPI, callInstitutionRecordAPISuccess, createEncryptionAndDecryption, createEncryptionAndDecryptionSuccess, createPartnerAPI, createPartnerAPISuccess, encryptData, encryptDataSuccess, getAllInstitutionsDropdown, getAllInstitutionsDropdownSuccess, getEncryptionAndDecryption, getEncryptionAndDecryptionSuccess, getPartnerAPI, getPartnerAPISuccess } from './action';



@Injectable()
export class InstitutionEffects {
  constructor(
    private actions$: Actions,
    private storage: StorageService,
    private appStore: Store<AppResponseInterface>,
    private notification: NotificationsService,
    private institutionService: InstitutionService
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
              return getEncryptionAndDecryptionSuccess({
                payload: data
                  
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

  getPartnerAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPartnerAPI),
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
              return getPartnerAPISuccess({
                payload: data
                  
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

  encryptData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(encryptData),
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
      
        const {params, payload } = action;
        return this.institutionService.encryptData(params, payload).pipe(
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
            return encryptDataSuccess({
              payload: data.payload
            });
          })
        );
      })
    );
  });

  callInstitutionRecordAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(callInstitutionRecordAPI),
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
      
        const {params, payload } = action;
        return this.institutionService.callInstitutionRecordAPI(params, payload).pipe(
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
            return callInstitutionRecordAPISuccess({
              payload: data.payload
            });
          })
        );
      })
    );
  });
}
