import { combineReducers } from 'redux';
import groups from './groups_reducer';
import events from './events_reducer';


const EntitiesReducer = combineReducers({
    groups
});

export default EntitiesReducer;