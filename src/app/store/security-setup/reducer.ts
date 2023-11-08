import { createReducer, on } from '@ngrx/store';
import { ISecurityStateInterface } from './types/index.types';
import {
  createEncryptionAndDecryptionSuccess,
  setupEncryptionAndDecryptionSuccess,
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

export const securityReducer = createReducer(
  initialState,
  on(setupEncryptionAndDecryptionSuccess, (state, { payload }) => {
    return {
      ...state,
      setupEncryptionAndDecryption: payload,
    };
  }),
  on(createEncryptionAndDecryptionSuccess, (state, { payload }) => {
    return {
      ...state,
      setupEncryptionAndDecryption: payload,
    };
  })
);
