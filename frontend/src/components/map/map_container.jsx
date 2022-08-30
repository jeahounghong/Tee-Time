import { fetchCourses } from '../../actions/course_actions';
import { connect } from 'react-redux';
import Map from './map';

const mapStateToProps = state => ({
    courses: state.entities.courses,
});

const mapDispatchToProps = dispatch => ({
    fetchCourses: () => dispatch(fetchCourses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);