import { RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT } from "../actions/event_actions";

const EventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_EVENT:
            nextState[action.event.id] = action.event;
            return nextState;

        case RECEIVE_EVENTS:
            Object.values(action.events).forEach(event => {
                nextState[event.id] = event;
            })
            return nextState;

        case REMOVE_EVENT:
            delete nextState[action.eventId];
            return nextState;

        default:
            return state;
    }
}

export default EventsReducer;