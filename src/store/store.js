import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import createSagaMiddleware from "redux-saga";
//import { thunk } from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
    //thunk,
].filter(
    Boolean
);

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

sagaMiddleware.run(rootSaga); //calling saga middleware

export const persistor = persistStore(store);

