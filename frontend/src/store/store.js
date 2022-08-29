import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
<<<<<<< HEAD

import rootReducer from '../reducers/root_reducer';
=======
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    // include rootReducer here
    createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
};
>>>>>>> 953073e (intermediary fixing bugs for render)

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
