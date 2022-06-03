import createAction from '../../utils/createAction';

import {
    IProduct,
    IBrands
} from './types';

const STATE_KEY = '@products';


export const SET_PRODUCTS = `${STATE_KEY}_SET_PRODUCTS`;
export const GET_PRODUCTS = `${STATE_KEY}_GET_PRODUCTS`;

export const SET_BRANDS = `${STATE_KEY}_SET_BRANDS`;
export const GET_BRANDS = `${STATE_KEY}_GET_BRANDS`;


export const setProducts = createAction<IProduct[]>(SET_PRODUCTS);
export const getProducts = createAction(GET_PRODUCTS);

export const setBrands = createAction<IBrands[]>(SET_BRANDS);
export const getBrands = createAction(GET_BRANDS);


