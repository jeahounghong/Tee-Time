import { connect } from "react-redux";
import GroupShow from "./group_show";
import { fetchUserGroups } from "../../actions/group_actions";
import { fetchGroupEvents } from "../../actions/event_actions";

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        events: Object.values(state.entities.events),
        groups: state.entities.groups
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGroups: userId => dispatch(fetchUserGroups(userId)),
        fetchGroupEvents: (groupId) => dispatch(fetchGroupEvents(groupId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow)