import { createSelector } from 'reselect';

import { IApplicationState } from '../types';

import {
    IProduct,
    IProductsState,
    TRecordOfProducts,
    TRecordOfBrands
} from './types';

const selectState = (state: IApplicationState): TRecordOfProducts | undefined =>
    state.products;
// @ts-ignore
export const makeSelectProducts: TRecordOfProducts = createSelector(
    selectState,
    state => {
        const value = state?.get('products');
        if (!value) return [];
        return value.toJS();
    }
);
// @ts-ignore
export const makeSelectBrands: TRecordOfBrands = createSelector(
    selectState,
    state => {
        const value = state?.get('brands');
        if (!value) return [];
        return value.toJS();
    }
);

// export const makeSelectStatusesData: TTaskSelectReturnType<TTaskSTatus[] | null> =
//     createSelector(selectState, state => state?.getIn(['statuses', 'data'])?.toJS());

// export const makeSelectStatusesLoading = createSelector(selectState, state => state?.getIn(['statuses', 'fetching']));
//
// export const makeSelectStatusesError = createSelector(selectState, state => state?.getIn(['statuses', 'error']));
