import { put, takeLatest, delay } from 'redux-saga/effects';
import { increment, decrement } from './counterSlice';

function* incrementAsync() {
   yield delay(1000);
   yield put(increment());
}

function* decrementAsync() {
    yield delay(1000);
    yield put(decrement());
}

export function* watchIncrementAsync() {
    yield takeLatest('counter/incrementAsync', incrementAsync);
}

export function* watchDecrementAsync() {
    yield takeLatest('counter/decrementAsync', decrementAsync);
}
