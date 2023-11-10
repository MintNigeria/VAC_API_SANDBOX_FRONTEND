import { createAction, props } from '@ngrx/store';

export const getAllInstitutionsDropdown = createAction(
  '[institutions] get all institution name dropdown',
  props<{ payload: any }>()
);
export const getAllInstitutionsDropdownSuccess = createAction(
  '[institutions] get all institution name dropdown success',
  props<{ payload: any }>()
);

export const getEncryptionAndDecryption = createAction(
  '[get encryption] get encryption and decryption',
  props<{ id:any}>()
);

export const getEncryptionAndDecryptionSuccess = createAction(
  '[get encryption] get encryption and decryption success',
  props<{payload: any}>()
);

export const createEncryptionAndDecryption = createAction(
  '[create decryption] create encryption and decryption',
  props<{payload: any, id: any}>()

);

export const createEncryptionAndDecryptionSuccess = createAction(
  '[create decryption] create encryption and decryption success',
  props<{payload: any}>()
);

export const getPartnerAPI = createAction(
  '[get partner api] get partner API',
  props<{id: any}>()

);

export const getPartnerAPISuccess = createAction(
  '[get partner api] integrate partner API success',
  props<{payload: any}>()
)

export const createPartnerAPI = createAction(
  '[update partner api] update partner API',
  props<{id: any, payload: any}>()

);

export const createPartnerAPISuccess = createAction(
  '[update partner api] integrate partner API success',
  props<{payload: any}>()
)
