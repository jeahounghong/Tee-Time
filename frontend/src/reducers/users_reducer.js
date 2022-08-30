import { RECEIVE_USERS } from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_USERS:
            Object.values(action.users).forEach(user => {
                nextState[user._id] = user
            })
            return nextState;
            
        default:
            return state
    }
}

export default UsersReducer