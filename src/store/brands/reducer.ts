import { fromJS } from 'immutable';

import { IPayloadAction } from '../types';

import createReducer from '../../utils/createReducer';

import {
    TRecordOfBrands,
    TBrandsStateHandler,
    IBrands
} from './types';
import {
    SET_BRANDS
} from './actions';
// @ts-ignore
const initialState: TRecordOfBrands = fromJS({
    brands: []
});

const setBrands: TBrandsStateHandler<IBrands[]> = ( state, action: IPayloadAction<IBrands[]>) =>
    // @ts-ignore
    state.set('brands', fromJS(action.payload));

export default createReducer<TRecordOfBrands>(initialState, {
    [SET_BRANDS]: setBrands,
});
