import { Store } from 'redux';
import { Task } from 'redux-saga';
import { AxiosError } from 'axios';
import { GetParamsFromSelectors, OutputSelector, SelectorResultArray } from 'reselect';

import { TRecordOfProducts } from './products/types';

export interface IApplicationState {
    products?: TRecordOfProducts;
}

export interface IWithSagaProductsStore extends Store<IApplicationState> {
    sagaProducts?: Task;
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

export type ResponseGenericType<T, E = Record<string, unknown>> = {
    fetching: boolean;
    data: T | null;
    error: AxiosError<E> | null;
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

export interface IDefaultState<T> {
    data: T | null,
    error: AxiosError | null,
    fetching: boolean;
}