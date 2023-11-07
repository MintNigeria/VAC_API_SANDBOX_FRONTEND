import { createReducer, on } from '@ngrx/store';
import { ISecurityStateInterface } from './types/index.types';
import { setupEncryptionAndDecryptionSuccess } from './action';

const initialState: ISecurityStateInterface = {
  setupEncryptionAndDecryption: {
    id: '',
    institutionId: '',
    institutionName: '',
    ivKey: '',
    secretKey: ''
  },
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
  );