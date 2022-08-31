import { deleteEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
import EventItem from './event_item';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
    // deleteEvent: event => dispatch(deleteEvent(event.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);