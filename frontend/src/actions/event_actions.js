import * as EventApiUtil from '../util/events_api_util';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
})