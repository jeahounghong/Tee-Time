import { fetchUsers } from '../../actions/user_actions';
import { fetchEvents } from '../../actions/event_actions';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { connect } from "react-redux";
import LoginForm from "./login_form";

const mapStateToProps = state => ({
    users: state.entities.users,
    events: state.entities.events,
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchEvents: () => dispatch(fetchEvents()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);