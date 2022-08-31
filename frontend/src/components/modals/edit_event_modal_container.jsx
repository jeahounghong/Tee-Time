import { connect } from "react-redux";
import EditEventModal from "./edit_event_modal";
import { updateEvent, deleteEvent } from "../../actions/event_actions";

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    updateEvent: event => dispatch(updateEvent(event)), 
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventModal);