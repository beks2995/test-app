import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { IBrands } from './types';
import {
    GET_BRANDS, setBrands
} from './actions';

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
        takeLatest([GET_BRANDS], getBrandsSaga),
    ]);
}

export default Saga;
