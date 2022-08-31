import { connect } from 'react-redux';
import Groups from './groups';
import { fetchUserGroups } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        groups: Object.values(state.entities.groups),
        events: Object.values(state.entities.events)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGroups: userId => dispatch(fetchUserGroups()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchEvents: () => dispatch(fetchEvents())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);