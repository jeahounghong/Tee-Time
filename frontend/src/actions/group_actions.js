import * as GroupApiUtil from '../util/group_api_util';
import {fetchUsers} from './user_actions'

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";
export const CLEAR_GROUP_ERRORS = "CLEAR_GROUP_ERRORS";


export const receiveGroup = (group) => ({
    type: RECEIVE_GROUP,
    group
})

export const receiveGroups = (groups) => ({
    type: RECEIVE_GROUPS,
    groups
})

export const removeGroup = (groupId) => ({
    type: REMOVE_GROUP,
    groupId
})

export const receiveGroupErrors = (errors) => ({
    type: RECEIVE_GROUP_ERRORS,
    errors
})

export const clearGroupErrors= () => ({
    type: CLEAR_GROUP_ERRORS
})

export const fetchGroup = (groupId) => dispatch =>  GroupApiUtil.getGroup(groupId)
    .then(group => dispatch(receiveGroup(group.data)));

export const fetchGroups = () => dispatch =>  GroupApiUtil.getGroups()
    .then(groups => dispatch(receiveGroups(groups.data)));

export const fetchUserGroups = (userId) => dispatch => GroupApiUtil.getUserGroups(userId)
    .then(groups => dispatch(receiveGroups(groups.data)))

export const deleteGroup = (groupId) => dispatch => GroupApiUtil.deleteGroup(groupId)
    .then(() => dispatch(removeGroup(groupId)))

export const updateGroup = (group) => dispatch => GroupApiUtil.updateGroup(group)
    .then((group) => dispatch(receiveGroup(group.data)))
    .catch(errors => {dispatch(receiveGroupErrors(errors.response.data))})

export const createGroup = (group) => dispatch => GroupApiUtil.createGroup(group)
    .then(group => {
        dispatch(receiveGroup(group.data))
        dispatch(fetchUsers())
        // this.props.toggleModal() 
    }).catch(errors => {dispatch(receiveGroupErrors(errors.response.data))})