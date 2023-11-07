import { createReducer } from '@ngrx/store';
import { ISecurityStateInterface } from './types/index.types';

const initialState: ISecurityStateInterface = {
  setupEncryptionAndDecryption: null,
  partnerAPI: null,
};
