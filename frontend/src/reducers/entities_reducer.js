import { combineReducers } from 'redux';
import groups from './groups_reducer';


const EntitiesReducer = combineReducers({
    groups
});

export default EntitiesReducer;