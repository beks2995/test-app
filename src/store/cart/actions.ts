import createAction from '../../utils/createAction';

import {
    IProduct,
} from './types';

const STATE_KEY = '@products';


export const SET_CART_PRODUCTS = `${STATE_KEY}_SET_CART_PRODUCTS`;
export const GET_CART_PRODUCTS = `${STATE_KEY}_GET_CART_PRODUCTS`;


export const setCartProduct = createAction<IProduct[]>(SET_CART_PRODUCTS);
export const getProducts = createAction(GET_CART_PRODUCTS);