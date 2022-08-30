import { connect } from 'react-redux';
import Groups from './groups';
import { fetchUserGroups } from '../../actions/group_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        groups: Object.values(state.entities.groups)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGroups: userId => dispatch(fetchUserGroups()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);