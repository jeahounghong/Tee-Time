import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => {
    // include rootReducer here
    createStore(preloadedState,applyMiddleware(thunk, logger))
};

export default configureStore;