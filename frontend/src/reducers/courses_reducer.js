import { RECEIVE_COURSE, RECEIVE_COURSES } from "../actions/course_actions";

const CourseReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_COURSE:
            nextState[action.course.id] = action.course;
            return nextState;

        case RECEIVE_COURSES:
            Object.values(action.courses).forEach(course => {
                nextState[course._id] = course;
            })
            return nextState;

        default:
            return state;
    }
}

export default CourseReducer;