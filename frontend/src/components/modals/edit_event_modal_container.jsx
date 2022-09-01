import { connect } from "react-redux";
import EditEventModal from "./edit_event_modal";
import { updateUser } from '../../actions/user_actions';
import { updateEvent, deleteEvent } from "../../actions/event_actions";

const mapStateToProps = state => ({
    currentUser: state.session.user,
    users: state.entities.users,
    courses: state.entities.courses,
});

const mapDispatchToProps = dispatch => ({
    updateEvent: event => dispatch(updateEvent(event)), 
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    updateUser: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventModal);