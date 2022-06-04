import { createSelector } from 'reselect';

import { IApplicationState } from '../types';

import {
    TRecordOfBrands,
    TBrandsSelectReturnType,
    IBrands
} from './types';

const selectState = (state: IApplicationState): TRecordOfBrands | undefined =>
    state.brands;

// @ts-ignore
export const makeSelectBrands: TBrandsSelectReturnType<IBrands[]> = createSelector(
    selectState,
    state => {
        const value = state?.get('brands');
        if (!value) return [];
        return value.toJS();
    }
);