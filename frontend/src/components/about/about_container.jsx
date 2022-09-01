import { fetchUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';
import About from './about';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);