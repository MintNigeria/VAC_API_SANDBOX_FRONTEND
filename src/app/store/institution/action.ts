import { createAction, props } from '@ngrx/store';

export const getAllInstitutionsDropdown = createAction(
  '[institutions] get all institution name dropdown',
  props<{ payload: any }>()
);
export const getAllInstitutionsDropdownSuccess = createAction(
  '[institutions] get all institution name dropdown success',
  props<{ payload: any }>()
);

