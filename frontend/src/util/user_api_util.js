import axios from 'axios';

export const getUsers = () => (
    axios.get(`/api/users`)
)

export const updateUser = (user) => (
    axios.patch(`/api/users/${user.id}`, user)
)