import { connect } from "react-redux";
import CreateGroupModal from "./create_group_modal";
import { fetchUsers } from "../../actions/user_actions";
import { clearGroupErrors, createGroup } from "../../actions/group_actions";
const mapStateToProps = state => {
    return {
        allUsers: Object.values(state.entities.users),
        currentUser: state.session.user,
        usersObjects: state.entities.users,
        groupErrors: state.errors.entities.group
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        createGroup: group => dispatch(createGroup(group)),
        clearErrors: () => dispatch(clearGroupErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupModal)