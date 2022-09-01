import axios from 'axios';

export const getEvent = (eventId) => (
    axios.get(`/api/events/${eventId}`)
)

export const getEvents = () => (
    axios.get('/api/events')
)

export const getUserEvents = (userId) => (
    axios.get(`/api/events/users/${userId}`)
)

export const getGroupEvents = (groupId) => (
    axios.get(`/api/events/groups/${groupId}`)
)

export const updateEvent = (data) => (
    axios.patch(`/api/events/${data.id}`, data)
)

export const createEvent = (data) => (
    axios.post(`/api/events`, data)
)

export const deleteEvent = (eventId) => (
    axios.delete(`/api/events/${eventId}`)
)