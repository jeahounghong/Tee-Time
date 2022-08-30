import { connect } from 'react-redux';
import Map from './map';

const mapStateToProps = state => ({
    courses: state.entities.courses,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Map);