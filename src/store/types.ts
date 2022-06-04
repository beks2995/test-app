import { Store } from 'redux';
import { Task } from 'redux-saga';
import { GetParamsFromSelectors, OutputSelector, SelectorResultArray } from 'reselect';

import { TRecordOfProducts } from './products/types';
import {TRecordOfBrands} from "./brands/types";

export interface IApplicationState {
    products?: TRecordOfProducts;
    brands?: TRecordOfBrands
}

export interface IWithSagaProductsStore extends Store<IApplicationState> {
    sagaTasks?: Task;
    initialState?: IApplicationState;
}

export declare type IPayloadAction<P = void, T extends string = string, M = never, E = never> = {
    payload: P;
    type: T;
} & ([M] extends [never]
    ? Record<string, unknown>
    : {
        meta: M;
    }) &
    ([E] extends [never]
        ? Record<string, unknown>
        : {
            error: E;
        });

export declare type THandler<T, S = void> = (state: T, action: IPayloadAction<S>) => T;
export declare type THandlers<T, S = void> = {
    [action: string]: THandler<T, S> | THandler<T, S>[];
};

export type TActionReturnType<T> = {
    type: string;
    payload?: T;
};

export type TSelectorReturnType<T, D> = OutputSelector<
    [((state: IApplicationState) => D)],
    T,
    (...args: SelectorResultArray<[((state: IApplicationState) => D)]>) => T,
    GetParamsFromSelectors<[((state: IApplicationState) => D)]>
    >;