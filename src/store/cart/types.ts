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
export interface IProductsState {
    products: List<IProduct>;
}

export type TRecordOfCartProducts = RecordOf<IProductsState>;
export type TCartProductsStateHandler<T = void> = THandler<TRecordOfCartProducts, T>;
export type TCartProductsSelectReturnType<T = undefined> = TSelectorReturnType<
    T,
    TRecordOfCartProducts
    >;


