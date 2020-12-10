import { put, takeEvery, delay } from 'redux-saga/effects';
import { increment, decrement } from './ducks';

function* incrementAsync() {
   yield delay(1000);
   yield put(increment());
}

function* decrementAsync() {
    yield delay(1000);
    yield put(decrement());
}

export function* watchIncrementAsync() {
    yield takeEvery('counter/incrementAsync', incrementAsync);
}

export function* watchDecrementAsync() {
    yield takeEvery('counter/decrementAsync', decrementAsync);
}
