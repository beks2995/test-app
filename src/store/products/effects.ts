import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { IBrands, IProduct, IProductsState } from './types';
import {
    GET_BRANDS,
    GET_PRODUCTS, setBrands, setProducts
} from './actions';

function* getProductsSaga(): Generator {
    try {
        const response = yield call(axios.get, 'https://raw.githubusercontent.com/AzureBin/react-test/master/assets/products.json');
        const { data } = response as AxiosResponse<IProduct[]>;
        yield put(setProducts(data));
    } catch (error) {
        console.error(error);
    }
}

function* getBrandsSaga(): Generator {
    try {
        const response = yield call(axios.get, 'https://raw.githubusercontent.com/AzureBin/react-test/master/assets/brands.json');
        const { data } = response as AxiosResponse<IBrands[]>;
        yield put(setBrands(data));
    } catch (error) {
        console.error(error);
    }
}

function* Saga(): Generator {
    yield all([
        takeLatest([GET_PRODUCTS], getProductsSaga),
        takeLatest([GET_BRANDS], getBrandsSaga),
    ]);
}

export default Saga;
