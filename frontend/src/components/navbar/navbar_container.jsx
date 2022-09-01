import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Navbar from './navbar';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.isAuthenticated),
        currentUser: state.session.user,
        users: state.entities.users
    }   
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);