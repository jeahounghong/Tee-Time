import { connect } from "react-redux";
import Navbar from './navbar';

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.isAuthenticated),
        currentUser: state.session.user,
    }   
}

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);