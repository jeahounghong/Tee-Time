import { connect } from 'react-redux';
import CourseEvents from './course_events';

const mapStateToProps = state => ({
    events: state.entities.events,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CourseEvents);