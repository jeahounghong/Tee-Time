import { connect } from "react-redux";
import CreateGroupModal from "./create_group_modal";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
    return {
        allUsers: Object.values(state.entities.users)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupModal)