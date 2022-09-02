import { connect } from 'react-redux';
import { fetchCourses } from '../../actions/course_actions';
import { fetchUserEvents } from '../../actions/event_actions';
import { fetchUsers } from '../../actions/user_actions';
import FriendProfile from './friend_profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        events: state.entities.events,
        courses: state.entities.courses,
        users: state.entities.users,
        currentUser: state.session.user,
        groups: state.entities.groups,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCourses: () => dispatch(fetchCourses()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendProfile))