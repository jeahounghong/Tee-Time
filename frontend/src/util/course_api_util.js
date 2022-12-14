import axios from 'axios';

export const getCourse = courseId => (
    axios.get(`/api/courses/${courseId}`)
)

export const getCourses = () => (
    axios.get('/api/courses')
)

