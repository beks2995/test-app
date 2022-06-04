import { createSelector } from 'reselect';

import { IApplicationState } from '../types';

import {
    TRecordOfCartProducts,
    TCartProductsSelectReturnType,
    IProduct
} from './types';

const selectState = (state: IApplicationState): TRecordOfCartProducts | undefined =>
    state.cartProducts;
// @ts-ignore
export const makeSelectProducts: TCartProductsSelectReturnType<IProduct[]> = createSelector(
    selectState,
    state => {
        // @ts-ignore
        const value = state?.get('cartProducts');
        if (!value) return [];
        return value.toJS();
    }
);