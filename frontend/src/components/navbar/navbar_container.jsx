import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Navbar from './navbar';

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.isAuthenticated),
        currentUser: state.session.user,
    }   
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);