import { createSlice, createAction } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      count: 0,
    },
    reducers: {
      increment: state => {
        state.count += 1;
      },
      decrement: state => {
        state.count -= 1;
      }
    },
});

export const incrementAsync = createAction('counter/incrementAsync');
export const decrementAsync = createAction('counter/decrementAsync');

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
