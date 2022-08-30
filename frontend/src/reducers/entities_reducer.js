import { combineReducers } from 'redux';
import groups from './groups_reducer';
import courses from './courses_reducer';
import events from './events_reducer';


const EntitiesReducer = combineReducers({
    groups,
    courses,
    events
});

export default EntitiesReducer;