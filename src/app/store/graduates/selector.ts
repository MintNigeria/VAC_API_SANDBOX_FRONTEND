import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

const selectFeature = (state: AppStateInterface) => state.graduates;

export const graduateSelector = createSelector(
  selectFeature,
  (state) => state.gradautes
);


