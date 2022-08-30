import * as GroupApiUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

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

export const fetchGroup = (groupId) => dispatch =>  GroupApiUtil.getGroup(groupId)

    .then(group => dispatch(receiveGroup(group.data)))

    .then(group => dispatch(receiveGroup(group.data)));

export const fetchGroups = () => dispatch =>  GroupApiUtil.getGroups()
    .then(groups => dispatch(receiveGroups(groups.data)));

export const fetchUserGroups = (userId) => dispatch => GroupApiUtil.getUserGroups(userId)
    .then(groups => dispatch(receiveGroups(groups.data)))

export const deleteGroup = (groupId) => dispatch => GroupApiUtil.deleteGroup(groupId)
    .then(() => dispatch(removeGroup(groupId)))

export const updateGroup = (group) => dispatch => GroupApiUtil.updateGroup(group)
    .then((group) => receiveGroup(group.data))

export const createGroup = (group) => dispatch => GroupApiUtil.createGroup(group)
    .then((group) => dispatch(receiveGroup(group.data)))