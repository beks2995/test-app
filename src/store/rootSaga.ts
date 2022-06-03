import { all, fork } from 'redux-saga/effects';

import products from './products/effects';

function* rootSaga(): Generator {
    yield all([
        fork(products),
    ]);
}

export default rootSaga;
