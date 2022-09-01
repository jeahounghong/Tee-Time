import { fetchUsers } from '../../actions/user_actions';
import { fetchEvents } from '../../actions/event_actions';
import { login } from '../../actions/session_actions';
import { connect } from "react-redux";
import LoginForm from "./login_form";

const mapStateToProps = state => ({
    users: state.entities.users,
    events: state.entities.events,
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);