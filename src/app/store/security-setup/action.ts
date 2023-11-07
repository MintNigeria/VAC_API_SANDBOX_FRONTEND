import { createAction, props } from "@ngrx/store";
import { ISetupEncryptionAndDecryption } from "./types/index.types";

export const setupEncryptionAndDecryption = createAction(
    '[security] setup encryption and decryption',
    props<{id: any}>()

);

export const setupEncryptionAndDecryptionSuccess = createAction(
    '[security] setup encryption and decryption success',
    props<{payload: ISetupEncryptionAndDecryption}>()
);

export const integratePartnerAPI = createAction(
    '[security] integrate partner API',
);

export const integratePartnerAPISuccess = createAction(
    '[security] integrate partner API success',
    props<{payload: any}>()
)
