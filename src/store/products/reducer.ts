import { fromJS } from 'immutable';

import { IPayloadAction } from '../types';

import createReducer from '../../utils/createReducer';

import {
    TRecordOfProducts,
    TProductsStateHandler,
    IProduct,
} from './types';
import {
    SET_PRODUCTS,
} from './actions';
// @ts-ignore
const initialState: TRecordOfProducts = fromJS({
    products: [],
});

const setProducts: TProductsStateHandler<IProduct[]> = ( state, action: IPayloadAction<IProduct[]>) =>
    // @ts-ignore
    state.set('products', fromJS(action.payload));

export default createReducer<TRecordOfProducts>(initialState, {
    [SET_PRODUCTS]: setProducts,
});
