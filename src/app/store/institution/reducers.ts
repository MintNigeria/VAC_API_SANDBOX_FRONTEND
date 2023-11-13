import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { IInstitutionStateInterface } from './types/index.type';

import * as storage from '../storage';
import { callInstitutionRecordAPISuccess, createEncryptionAndDecryptionSuccess, createPartnerAPISuccess, encryptDataSuccess, getAllInstitutionsDropdownSuccess, getEncryptionAndDecryptionSuccess, getPartnerAPISuccess } from './action';

const initialState: IInstitutionStateInterface = {
  dropdown: null,
  encryptionData: null,
  partnerAPIdata: null,
  encryptData: null,
  apiData: null,
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
      encryptionData : payload
    };
  }),
  on(createEncryptionAndDecryptionSuccess, (state, { payload }) => {
    return {
      ...state,
      dropdown : payload
    };
  }),
  on(getPartnerAPISuccess, (state, { payload }) => {
    return {
      ...state,
      partnerAPIdata : payload
    };
  }),
  on(createPartnerAPISuccess, (state, { payload }) => {
    return {
      ...state,
      dropdown : payload
    };
  }),
  on(encryptDataSuccess, (state, { payload }) => {
    return {
      ...state,
      encryptData : payload
    };
  }),
  on(callInstitutionRecordAPISuccess, (state, { payload }) => {
    return {
      ...state,
      apiData : payload
    };
  }),
  
);
