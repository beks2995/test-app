import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { IProduct } from './types';
import {
    GET_PRODUCTS, setProducts
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


function* Saga(): Generator {
    yield all([
        takeLatest([GET_PRODUCTS], getProductsSaga),
    ]);
}

export default Saga;
