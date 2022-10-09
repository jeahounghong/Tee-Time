import { fetchEvents, deleteEvent } from '../../actions/event_actions';
import { fetchCourses } from '../../actions/course_actions';
import { fetchUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Events from './events';

const mapStateToProps = state => {
    return ({
        events: state.entities.events,
        currentUser: state.session.user,
        courses: state.entities.courses,
        users: state.entities.users,
    })
};

const mapDispatchToProps = dispatch => ({
    fetchCourses: () => dispatch(fetchCourses()),
    fetchEvents: () => dispatch(fetchEvents()),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);