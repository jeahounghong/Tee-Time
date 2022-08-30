import { fetchEvents } from '../../actions/event_actions';
import { fetchCourses } from '../../actions/course_actions';
import { fetchUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Events from './events';

const mapStateToProps = state => ({
    events: state.entities.events,
    currentUser: state.session.user,
    courses: state.entities.courses,
});

const mapDispatchToProps = dispatch => ({
    fetchCourses: () => dispatch(fetchCourses()),
    fetchEvents: () => dispatch(fetchEvents()),
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);