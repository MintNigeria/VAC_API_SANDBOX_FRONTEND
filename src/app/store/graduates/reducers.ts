import { createReducer, on } from '@ngrx/store';
import {GraduatesStateInterface} from './types/index.type';
import { invokeGetAllGraduatesSuccess } from './action';


const initialState: GraduatesStateInterface  = {
    gradautes: { data: [], totalCount: 0 },
   
};

export const graduatesReducer = createReducer(
  initialState,
  on(invokeGetAllGraduatesSuccess, (state, { payload }) => {
    return {
      ...state,
      gradautes: payload,
    };
  }),
 
  

);
