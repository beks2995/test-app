import { fromJS } from 'immutable';

import { IPayloadAction } from '../types';

import createReducer from '../../utils/createReducer';

import {
    TRecordOfCartProducts,
    TCartProductsStateHandler,
    IProduct,
} from './types';
import {
    SET_CART_PRODUCTS,
} from './actions';
// @ts-ignore
const initialState: TRecordOfProducts = fromJS({
    cartProducts: [],
});

const setCartProducts: TCartProductsStateHandler<IProduct[]> = ( state, action: IPayloadAction<IProduct[]>) =>
    // @ts-ignore
    state.set('cartProducts', fromJS(action.payload));

export default createReducer<TRecordOfCartProducts>(initialState, {
    [SET_CART_PRODUCTS]: setCartProducts,
});
