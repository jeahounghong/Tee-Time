import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
// import tweets from './tweets_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entities
//   tweets
});

export default RootReducer;