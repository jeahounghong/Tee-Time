import { connect } from 'react-redux';
import EditGroupModal from './edit_group_modal';
import { updateGroup, deleteGroup, clearGroupErrors } from '../../actions/group_actions';
import { fetchUsers, updateUser } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        allUsers: Object.values(state.entities.users),
        usersObjects: state.entities.users,
        groupErrors: state.errors.entities.group
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateGroup: group => dispatch(updateGroup(group)),
        updateUser: (user) => dispatch(updateUser(user)),
        deleteGroup: groupId => dispatch(deleteGroup(groupId)),
        fetchUsers: () => dispatch(fetchUsers()),
        clearErrors: () => dispatch(clearGroupErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupModal)