import createAction from '../../utils/createAction';

import {
    IBrands
} from './types';

const STATE_KEY = '@brands';

export const SET_BRANDS = `${STATE_KEY}_SET_BRANDS`;
export const GET_BRANDS = `${STATE_KEY}_GET_BRANDS`;

export const setBrands = createAction<IBrands[]>(SET_BRANDS);
export const getBrands = createAction(GET_BRANDS);


