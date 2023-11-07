import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, take } from 'rxjs';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { StorageService } from 'src/app/core/services/shared/storage.service';
import { AppResponseInterface } from 'src/app/types/appState.interface';
import { setAPIResponseMessage } from '../shared/app.action';
import { getAllInstitutionsDropdown, getAllInstitutionsDropdownSuccess } from './action';



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

 
}
