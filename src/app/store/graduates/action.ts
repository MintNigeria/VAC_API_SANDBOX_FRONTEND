import { createAction, props } from '@ngrx/store';
import { IGraduateApproveReject } from './types/index.type';

export const invokeGetAllGraduates = createAction(
  '[graduates] invoke get all graduates',
  props<{
    institutionId: string,
    payload: any
  }>()
);

export const invokeGetAllGraduatesSuccess = createAction(
  '[graduates] report graduates',
  props<{
    payload: any
  }>()
);
