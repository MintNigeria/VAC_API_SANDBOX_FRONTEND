import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

const selectFeature = (state: AppStateInterface) => state.setupEncryptionAndDecryption;

export const securitySelector = createSelector(
    selectFeature,
    (state) => state.setupEncryptionAndDecryption
  )