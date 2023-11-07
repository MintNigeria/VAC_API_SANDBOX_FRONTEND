import { createAction, props } from "@ngrx/store";

export const setupEncryptionAndDecryption = createAction(
    '[security] setup encryption and decryption',
);

export const setupEncryptionAndDecryptionSuccess = createAction(
    '[security] setup encryption and decryption success',
    props<{payload: any}>()
);

export const integratePartnerAPI = createAction(
    '[security] integrate partner API',
);

export const integratePartnerAPISuccess = createAction(
    '[security] integrate partner API success',
    props<{payload: any}>()
)
