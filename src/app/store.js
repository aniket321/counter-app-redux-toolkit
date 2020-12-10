import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/ducks';
import rootSagas from '../saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [...middlewares],
});

sagaMiddleware.run(rootSagas);
export default store;
