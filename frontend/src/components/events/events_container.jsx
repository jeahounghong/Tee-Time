import { connect } from 'react-redux';
import Events from './events';

const mapStateToProps = state => ({
    events: state.entities.events,
    currentUser: state.session.user,
    courses: state.entities.courses,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);