import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { IInstitutionStateInterface } from './types/index.type';

import * as storage from '../storage';
import { callInstitutionConfigurationAPISuccess, callInstitutionRecordAPISuccess, createEncryptionAndDecryptionSuccess, createPartnerAPISuccess, decryptDataSuccess, encryptDataSuccess, getAllInstitutionsDropdownSuccess, getEncryptionAndDecryptionSuccess, getPartnerAPISuccess, invokeSupportSuccess } from './action';

const initialState: IInstitutionStateInterface = {
  dropdown: null,
  encryptionData: null,
  partnerAPIdata: null,
  encryptData: null,
  decryptData: null,
  apiData: null,
  configData: null,
  support: null,
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
  on(decryptDataSuccess, (state, { payload }) => {
    return {
      ...state,
      decryptData : payload
    };
  }),
  on(callInstitutionRecordAPISuccess, (state, { payload }) => {
    return {
      ...state,
      apiData : payload
    };
  }),
  on(callInstitutionConfigurationAPISuccess, (state, { payload }) => {
    return {
      ...state,
      configData : payload
    };
  }),
  on(invokeSupportSuccess, (state, { payload }) => {
    return {
      ...state,
      support : payload
    };
  }),
  
);
