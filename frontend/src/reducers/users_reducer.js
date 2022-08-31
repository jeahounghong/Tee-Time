import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_USERS:
            Object.values(action.users).forEach(user => {
                nextState[user._id] = user
            })
            return nextState;
        
            case RECEIVE_USER:
                nextState[action.user._id] = action.user;
                return nextState;
                
        default:
            return state
    }
}

export default UsersReducer