import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromAuth from '../store/auth/reducers';
import * as fromShared from '../store/shared/app.reducer';
import * as fromGraduates from '../store/graduates/reducers'
import * as fromInstitutions from '../store/institution/reducers';
import * as fromSecurity from '../store/security-setup/reducer'


import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { IAuthStateInterface } from '../store/auth/index.types';
import { GraduatesStateInterface } from '../store/graduates/types/index.type';
import { IInstitutionStateInterface } from '../store/institution/types/index.type';
import { ISecurityStateInterface } from '../store/security-setup/types/index.types'


// all module state should be imported here
export interface AppStateInterface {
  auth: IAuthStateInterface;
  apiResponse: AppResponseInterface;
  graduates: GraduatesStateInterface,
  // auditLog : AuditLogStateInterface
  institutions: IInstitutionStateInterface;
  encryptionData: ISecurityStateInterface;

}

export interface AppLoadingStateInterface {
  isLoading: boolean;
}

export interface AppResponseInterface extends AppLoadingStateInterface {
  apiResponseMessage: string | object;
  isApiSuccessful: boolean;
}

export const reducers: ActionReducerMap<AppStateInterface> = {
  auth: fromAuth.authReducers,
  apiResponse: fromShared.appReducer,
  institutions: fromInstitutions.institutionReducers,
  graduates: fromGraduates.graduatesReducer,
  encryptionData: fromSecurity.securityReducer

};

const reducerKeys = ['auth', 'institutions','graduates', 'security'];

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: reducerKeys })(reducer);
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppStateInterface>[] =
  !environment.production
    ? [debug, localStorageSyncReducer]
    : [localStorageSyncReducer];
