import { connect } from "react-redux";
import CreateGroupModal from "./create_group_modal";
import { fetchUsers } from "../../actions/user_actions";
import { createGroup } from "../../util/group_api_util";
const mapStateToProps = state => {
    return {
        allUsers: Object.values(state.entities.users),
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        createGroup: group => dispatch(createGroup(group))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupModal)