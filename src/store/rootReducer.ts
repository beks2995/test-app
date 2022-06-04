import { combineReducers } from 'redux';

import { IApplicationState } from './types';
import products from "./products/reducer";
import brands from "./brands/reducer";
import cartProducts from "./cart/reducer";

const rootReducer = combineReducers<IApplicationState>({
    products,
    brands,
    cartProducts
});

export default rootReducer;
