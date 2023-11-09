import { createReducer, on } from '@ngrx/store';
import { ISecurityStateInterface } from './types/index.types';
import {
  createEncryptionAndDecryptionSuccess,
  getEncryptionAndDecryptionSuccess,
} from './action';

const initialState: ISecurityStateInterface = {
encryptionData: null,
  partnerAPI: null,
};

export const securityReducers = createReducer(
  initialState,
  on(getEncryptionAndDecryptionSuccess, (state, { payload }) => {
    return {
      ...state,
      encryptionData: payload,
    };
  }),
  on(createEncryptionAndDecryptionSuccess, (state, { payload }) => {
    return {
      ...state,
      encryptionData: payload,
    };
  })
);
