import { updateEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
import EventItem from './event_item';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
    updateEvent: event => dispatch(updateEvent(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);