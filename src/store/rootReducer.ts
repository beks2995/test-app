import { combineReducers } from 'redux';

import { IApplicationState } from './types';
import products from "./products/reducer";
import brands from "./brands/reducer";

const rootReducer = combineReducers<IApplicationState>({
    products,
    brands
});

export default rootReducer;
