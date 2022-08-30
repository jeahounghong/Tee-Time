import { connect } from "react-redux";
import CreateEventModal from "./create_event_modal";
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = state => ({
    currentUser: state.session.user,
});

const mapDispatchToProps = dispatch => ({
    createEvent: event => dispatch(createEvent(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModal);