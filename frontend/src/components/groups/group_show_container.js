import { connect } from "react-redux";
import GroupShow from "./group_show";
import { fetchUserGroups } from "../../actions/group_actions";
import { fetchGroupEvents } from "../../actions/event_actions";
import { createEvent } from "../../actions/event_actions";
import { fetchCourses } from "../../actions/course_actions";

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        events: Object.values(state.entities.events),
        groups: state.entities.groups,
        courses: state.entities.courses
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGroups: userId => dispatch(fetchUserGroups(userId)),
        fetchGroupEvents: (groupId) => dispatch(fetchGroupEvents(groupId)),
        createEvent: event => dispatch(createEvent(event)),
        fetchCourses: () => dispatch(fetchCourses())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow)