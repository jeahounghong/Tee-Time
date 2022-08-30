import { combineReducers } from 'redux';
import groups from './groups_reducer';
import courses from './courses_reducer';
import events from './events_reducer';
import users from './users_reducer';


const EntitiesReducer = combineReducers({
    groups,
    courses,
    events,
    users
});

export default EntitiesReducer;