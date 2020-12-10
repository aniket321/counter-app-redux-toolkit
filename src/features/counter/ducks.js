import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { put, takeEvery, delay } from 'redux-saga/effects';

// Action Types
export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
export const INCREMENT_ASYNC = 'counter/incrementAsync';
export const DECREMENT_ASYNC = 'counter/decrementAsync';

// Action Creators
export const incrementAction = createAction(INCREMENT);
export const decrementAction = createAction(DECREMENT);
export const incrementAsyncAction = createAction(INCREMENT_ASYNC);
export const decrementAsyncAction = createAction(DECREMENT_ASYNC);

// Initial state
const initialState = { count: 0 };

// Reducer
const counterReducer = createReducer(initialState, {
  [incrementAction]: state => ({ count: state.count + 1 }),
  [decrementAction]: state => ({ count: state.count - 1 })
})

// Selectors
const counterSelectorValue = state => state.counter.count;

export const counterSelector = createSelector(
  counterSelectorValue,
  count => count
)

// Sagas
function* incrementAsyncWorker() {
   yield delay(1000);
   yield put(incrementAction());
}

function* decrementAsyncWorker() {
    yield delay(1000);
    yield put(decrementAction());
}

export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsyncWorker);
}

export function* watchDecrementAsync() {
    yield takeEvery(DECREMENT_ASYNC, decrementAsyncWorker);
}


export default counterReducer;
