import { all } from 'redux-saga/effects';
import { watchIncrementAsync, watchDecrementAsync } from '../features/counter/sagas';

export default function* rootSagas() {
   yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
