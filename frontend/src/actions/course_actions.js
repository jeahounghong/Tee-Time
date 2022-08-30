import * as CourseApiUtil from '../util/course_api_util'

export const RECEIVE_COURSE = "RECEIVE_COURSE";
export const RECEIVE_COURSES = "RECEIVE_COURSES";

export const receiveCourse = (course) => ({
    type: RECEIVE_COURSE,
    course
})

export const receiveCourses = (courses) => ({
    type: RECEIVE_COURSES,
    courses
})

export const fetchCourse = (courseId) => dispatch => CourseApiUtil.getCourse(courseId)
    .then(course => dispatch(receiveCourse(course.data)))

export const fetchCourses = () => dispatch => CourseApiUtil.getCourses()
    .then(courses => dispatch(receiveCourses(courses.data)));