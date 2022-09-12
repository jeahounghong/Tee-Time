import { RECEIVE_GROUP_ERRORS, CLEAR_GROUP_ERRORS } from "../actions/group_actions";

const _nullErrors = {
    group: {}
}

const EntitiesErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state)
    let nextState = Object.assign({},state);
    switch(action.type){
        case RECEIVE_GROUP_ERRORS:
            nextState.group = action.errors;
            // debugger;
            return nextState;

        case CLEAR_GROUP_ERRORS:
            nextState.group = {};
            return nextState;

        default:
            return state;
    }
}

export default EntitiesErrorsReducer;