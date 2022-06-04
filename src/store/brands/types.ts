import { RecordOf, List } from 'immutable';

import { THandler, TSelectorReturnType } from '../types';

export interface IBrands {
    "id": number,
    "title": string,
    "sort": string,
    "code": string
}
export interface IBrandsState {
    brands: List<IBrands>;
}

export type TRecordOfBrands = RecordOf<IBrandsState>;
export type TBrandsStateHandler<T = void> = THandler<TRecordOfBrands, T>;
export type TBrandsSelectReturnType<T = undefined> = TSelectorReturnType<
    T,
    TRecordOfBrands
    >;


