import { connect } from 'react-redux';
import Groups from './groups';
import { fetchUserGroups, fetchGroups } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchUserEvents, fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        groups: Object.values(state.entities.groups)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGroups: userId => dispatch(fetchUserGroups(userId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUserEvents: userId => dispatch(fetchUserEvents(userId)),
        fetchEvents: () => dispatch(fetchEvents()),
        fetchGroups: () => dispatch(fetchGroups())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);