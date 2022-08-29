import { REMOVE_GROUP, RECEIVE_GROUP, RECEIVE_GROUPS } from "../actions/group_actions";

const GroupsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_GROUP:
            nextState[action.group.id] = action.group;
            return nextState;

        case RECEIVE_GROUPS:
            Object.values(action.groups).forEach(group => {
                nextState[group.id] = group;
            })
            return nextState;

        case REMOVE_GROUP:
            delete nextState[action.groupId];
            return nextState;

        default:
            return state;
    }
}

export default GroupsReducer;