import { all, fork } from 'redux-saga/effects';

import products from './products/effects';
import brands from './brands/effects';

function* rootSaga(): Generator {
    yield all([
        fork(products),
        fork(brands),
    ]);
}

export default rootSaga;
