import { createAction, props } from "@ngrx/store";

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

export const integratePartnerAPI = createAction(
    '[integrate partner api] integrate partner API',
);

export const integratePartnerAPISuccess = createAction(
    '[security] integrate partner API success',
    props<{payload: any}>()
)
