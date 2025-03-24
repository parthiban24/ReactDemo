import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('Type:', action.type);
    console.log('payload:', action.payload);
    console.log('CurrentState:', store.getState());

    next(action);

    console.log('Next State:', store.getState());
}

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(rootReducer, undefined, composedEnhancers);

