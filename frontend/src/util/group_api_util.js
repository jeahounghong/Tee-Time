import axios from 'axios';

export const getGroup = (groupId) => {
    return axios.get(`/api/groups/${groupId}`)
}

export const getUserGroups = (userId) => {
    return axios.get(`/api/groups/users/${userId}`)
}

export const updateGroup = (data) => {
    return axios.patch(`/api/groups/${data.id}`, data)
}

export const createGroup = (data) => {
    return axios.post(`/api/groups`, data)
}

export const deleteGroup = (groupId) => {
    return axios.post(`/api/groups/${groupId}`)
}