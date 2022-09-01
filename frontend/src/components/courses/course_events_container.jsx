import { connect } from 'react-redux';
import CourseEvents from './course_events';
import { deleteEvent } from '../../actions/event_actions';

const mapStateToProps = state => ({
    events: state.entities.events,
    courses: state.entities.courses,
});

const mapDispatchToProps = dispatch => ({
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseEvents);