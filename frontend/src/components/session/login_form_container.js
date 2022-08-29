import {logout, signup, login} from '../../actions/session_actions';
import { connect } from "react-redux";
import LoginForm from "./login_form";

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);