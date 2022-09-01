import { connect } from 'react-redux';
import Group from './group_item';
import { fetchGroupEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        groups: Object.values(state.entities.groups),
        users: state.entities.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroupEvents: groupId => dispatch(fetchGroupEvents(groupId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Group)