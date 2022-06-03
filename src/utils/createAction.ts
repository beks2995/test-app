import { TActionReturnType } from '../store/types';

export type TUtilType<T = never> = (
  payload?: T
) => TActionReturnType<T>;

const createAction =
  <T = never>(
    actionType: string
  ): TUtilType<T> =>
    payload => ({
      type: actionType,
      payload,
    });

export default createAction;
