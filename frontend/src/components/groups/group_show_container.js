import { connect } from "react-redux";
import GroupShow from "./group_show";
import { fetchUserGroups } from "../../actions/group_actions";

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        events: state.entities.events,
        groups: state.entities.groups
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGroups: userId => dispatch(fetchUserGroups(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow)