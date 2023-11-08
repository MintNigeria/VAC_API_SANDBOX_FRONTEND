import { createReducer, on } from '@ngrx/store';
import { ISecurityStateInterface } from './types/index.types';
import {
  createEncryptionAndDecryptionSuccess,
  getEncryptionAndDecryptionSuccess,
} from './action';

const initialState: ISecurityStateInterface = {
//   setupEncryptionAndDecryption: {
//     id: '',
//     institutionId: '',
//     institutionName: '',
//     ivKey: '',
//     secretKey: '',
//   },
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
      setupEncryptionAndDecryption: payload,
    };
  })
);
