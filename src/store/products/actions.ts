import createAction from '../../utils/createAction';

import {
    IProduct,
} from './types';

const STATE_KEY = '@products';


export const SET_PRODUCTS = `${STATE_KEY}_SET_PRODUCTS`;
export const GET_PRODUCTS = `${STATE_KEY}_GET_PRODUCTS`;


export const setProducts = createAction<IProduct[]>(SET_PRODUCTS);
export const getProducts = createAction(GET_PRODUCTS);



