import { combineReducers } from 'redux';
import groups from './groups_reducer';
import courses from './courses_reducer';


const EntitiesReducer = combineReducers({
    groups,
    courses
});

export default EntitiesReducer;