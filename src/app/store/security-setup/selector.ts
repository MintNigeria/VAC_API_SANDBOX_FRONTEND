import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

const selectFeature = (state: AppStateInterface) => state.security;

export const securitySelector = createSelector(
    selectFeature,
    (state) => state.encryptionData
)