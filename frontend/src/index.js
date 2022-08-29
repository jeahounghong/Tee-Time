import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  store = configureStore();

  // debugger;
  const root = document.getElementById('root');
  // debugger;
  ReactDOM.render(<Root store={store} />, root);
})
