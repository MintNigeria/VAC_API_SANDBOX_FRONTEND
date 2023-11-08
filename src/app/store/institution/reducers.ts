import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { IInstitutionStateInterface } from './types/index.type';

import * as storage from '../storage';
import { getAllInstitutionsDropdownSuccess, getEncryptionAndDecryptionSuccess } from './action';

const initialState: IInstitutionStateInterface = {
  dropdown: null,
  encryptionData: null
};

export const institutionReducers = createReducer(
  initialState,
  on(getAllInstitutionsDropdownSuccess, (state, { payload }) => {
    return {
      ...state,
      dropdown : payload
    };
  }),
  on(getEncryptionAndDecryptionSuccess, (state, { payload }) => {
    return {
      ...state,
      dropdown : payload
    };
  }),
  
);
