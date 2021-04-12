import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/reducers';

import RootSaga from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;