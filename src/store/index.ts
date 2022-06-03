import { createStore, applyMiddleware, compose, CombinedState } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { IWithSagaProductsStore, IApplicationState, IPayloadAction } from './types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


// eslint-disable-next-line @typescript-eslint/ban-types
export const configureStore = <T extends object = never>(initialState: T): IWithSagaProductsStore => {
    const sagaMiddleware = createSagaMiddleware({});
    const middlewares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' as keyof Window]
            ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' as keyof Window]({
                shouldHotReload: false,
            })
            : compose;

    const store: IWithSagaProductsStore = createStore<CombinedState<IApplicationState>, IPayloadAction, undefined, undefined>(
        rootReducer,
        initialState,
        composeEnhancers(...enhancers)
    );
    store.sagaProducts = sagaMiddleware.run(rootSaga);
    return store;
};

export function initStore(initialState: IApplicationState = {}): IWithSagaProductsStore {
    return configureStore<IApplicationState>(initialState);
}

export default initStore;
