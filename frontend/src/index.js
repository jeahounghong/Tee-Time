import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import {logout} from './actions/session_actions';
import {fetchCourse, fetchCourses} from './actions/course_actions'

import {fetchEvents, fetchEvent, deleteEvent, createEvent, updateEvent, fetchUserEvents} from './actions/event_actions'
import {fetchGroups, fetchGroup, deleteGroup, createGroup, updateGroup, fetchUserGroups} from './actions/group_actions'


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

  window.fetchEvents = fetchEvents;
  window.fetchEvent = fetchEvent;
  window.createEvent = createEvent;
  window.updateEvent = updateEvent;
  window.deleteEvent = deleteEvent;
  window.fetchUserEvents = fetchUserEvents;

  window.fetchGroups = fetchGroups;
  window.fetchGroup = fetchGroup;

  window.createGroup = createGroup;
  window.updateGroup = updateGroup;
  window.deleteGroup = deleteGroup;
  window.fetchUserGroups = fetchUserGroups;

  window.fetchCourses = fetchCourses;



  const root = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
