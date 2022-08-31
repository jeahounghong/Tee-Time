import { connect } from "react-redux";
import { fetchCourses } from "../../actions/course_actions";
import { fetchUserEvents } from "../../actions/event_actions";
import { fetchUsers, updateUser } from "../../actions/user_actions";
import Profile from "./profile";

const mapStateToProps = state => ({
    events: state.entities.events,
    courses: state.entities.courses,
    users: state.entities.users,
    currentUser: state.session.user // added by Torben
})

const mapDispatchToProps = dispatch => ({
    fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
    fetchCourses: () => dispatch(fetchCourses()),
    fetchUsers: () => dispatch(fetchUsers()),
    updateUser: user => dispatch(updateUser(user))
})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;