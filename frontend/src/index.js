import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import {logout} from './actions/session_actions';
import "./main.scss";

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store=configureStore(preloadedState);
    const curretTime = Date.now() / 1000;
    if (decodedUser.exp < curretTime) {
      store.dispatch(logout());
      window.location.href = './login';
    }
  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
