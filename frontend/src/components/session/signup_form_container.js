import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { fetchEvents } from '../../actions/event_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session,
        events: state.entities.users,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        fetchEvents: () => dispatch(fetchEvents()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);