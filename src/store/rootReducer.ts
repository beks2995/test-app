import { combineReducers } from 'redux';

import { IApplicationState } from './types';
import products from "./products/reducer";

const rootReducer = combineReducers<IApplicationState>({
    products,
});

export default rootReducer;
