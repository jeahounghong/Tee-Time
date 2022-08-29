import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  store = configureStore(preloadedState);

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
})
