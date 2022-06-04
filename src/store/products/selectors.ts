import { createSelector } from 'reselect';

import { IApplicationState } from '../types';

import {
    TRecordOfProducts,
    TProductsSelectReturnType,
    IProduct
} from './types';

const selectState = (state: IApplicationState): TRecordOfProducts | undefined =>
    state.products;
// @ts-ignore
export const makeSelectProducts: TProductsSelectReturnType<IProduct[]> = createSelector(
    selectState,
    state => {
        const value = state?.get('products');
        if (!value) return [];
        return value.toJS();
    }
);