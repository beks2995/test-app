import { IPayloadAction, THandler } from '../store/types';

type TUtilType<T, S = void> = (state: T, action: IPayloadAction<S>) => T;

const CombineChanges = <T, S = void>(changes: THandler<T, S>[]): TUtilType<T, S> =>
  (curState: T, action: IPayloadAction<S>) =>
    changes.reduce((state, reducer) => reducer(state, action), curState);

export default CombineChanges