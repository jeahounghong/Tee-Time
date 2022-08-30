import { connect } from "react-redux";
import EditEventModal from "./edit_event_modal";
import { updateEvent } from "../../actions/event_actions";

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    updateEvent: event => dispatch(updateEvent(event)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventModal);