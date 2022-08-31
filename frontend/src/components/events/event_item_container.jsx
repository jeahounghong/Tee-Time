import { updateEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
import EventItem from './event_item';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
    updateEvent: event => dispatch(updateEvent(event)),
    updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);