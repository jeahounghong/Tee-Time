import { fetchUsers } from '../../actions/user_actions';
import { fetchEvents } from '../../actions/event_actions';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => ({
    users: state.entities.users,
    events: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);