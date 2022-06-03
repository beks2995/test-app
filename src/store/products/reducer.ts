import { fromJS } from 'immutable';

import { IPayloadAction } from '../types';

import createReducer from '../../utils/createReducer';

import {
    TRecordOfProducts,
    TProductsStateHandler,
    TRecordOfBrands,
    TBrandsStateHandler,
    IProduct,
    IBrands
} from './types';
import {
    SET_PRODUCTS,
    SET_BRANDS
} from './actions';
// @ts-ignore
const initialState: TRecordOfProducts = fromJS({
    products: [],
    brands: []
});

const setProducts: TProductsStateHandler<IProduct[]> = ( state, action: IPayloadAction<IProduct[]>) =>
    // @ts-ignore
    state.set('products', fromJS(action.payload));

const setBrands: TBrandsStateHandler<IBrands[]> = ( state, action: IPayloadAction<IBrands[]>) =>
    // @ts-ignore
    state.set('brands', fromJS(action.payload));

export default createReducer<TRecordOfProducts>(initialState, {
    [SET_PRODUCTS]: setProducts,
    [SET_BRANDS]: setBrands,
});
