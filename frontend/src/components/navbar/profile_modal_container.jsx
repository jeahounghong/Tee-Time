import { connect } from 'react-redux';
import ProfileModal from './profile_modal';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileModal));