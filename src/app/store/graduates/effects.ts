import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap, take } from 'rxjs';
import { GraduatesService } from 'src/app/core/services/graduates/graduates.service';
import { UploadsService } from 'src/app/core/services/uploads/uploads.service';
import { AppResponseInterface } from 'src/app/types/appState.interface';
import { setAPIResponseMessage } from '../shared/app.action';
import { invokeGetAllGraduates, invokeGetAllGraduatesSuccess } from './action';

@Injectable()
export class GraduatesEffects {
  constructor(
    private actions$: Actions,
    private graduateService : GraduatesService,
    private uploadService : UploadsService,
    private appStore: Store<AppResponseInterface>
  ) {}



  getGraduates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeGetAllGraduates),
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
        
        return this.graduateService.getAllInstitutionGraduates(
            action.institutionId, action.payload
          )
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
              return invokeGetAllGraduatesSuccess({
                payload: { data: data.payload, totalCount: data.totalCount }
              });
            })
          );
      })
    );
  });

  

}
