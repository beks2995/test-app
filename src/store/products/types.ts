import { RecordOf, List } from 'immutable';

import { THandler, TSelectorReturnType } from '../types';

export interface IRegularPrice {
    "currency": string,
    "value": number
}
export interface IProduct {
    "type": string,
    "id": number,
    "sku": string,
    "title": string,
    "regular_price": IRegularPrice,
    "image": string,
    "brand": number
}
export interface IBrands {
    "id": number,
    "title": string,
    "sort": string,
    "code": string
}
export interface IProductsState {
    products: List<IProduct>;
    brands: List<IBrands>;
}

export type TRecordOfProducts = RecordOf<IProductsState>;
export type TProductsStateHandler<T = void> = THandler<TRecordOfProducts, T>;
export type TProductsSelectReturnType<T = undefined> = TSelectorReturnType<
    T,
    TRecordOfProducts
    >;

export type TRecordOfBrands = RecordOf<IProductsState>;
export type TBrandsStateHandler<T = void> = THandler<TRecordOfBrands, T>;
export type TBrandsSelectReturnType<T = undefined> = TSelectorReturnType<
    T,
    TRecordOfBrands
    >;


