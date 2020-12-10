import { createAction, createReducer } from '@reduxjs/toolkit';

// Action Types
export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
export const INCREMENT_ASYNC = 'counter/incrementAsync';
export const DECREMENT_ASYNC = 'counter/decrementAsync';

// Action Creators
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = createAction(INCREMENT_ASYNC);
export const decrementAsync = createAction(DECREMENT_ASYNC);

// Initial state
const initialState = { count: 0 };

// Reducer
const counterReducer = createReducer(initialState, {
  [increment]: state => ({ count: state.count + 1 }),
  [decrement]: state => ({ count: state.count - 1 })
})

export default counterReducer;
