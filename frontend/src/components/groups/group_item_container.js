import { connect } from 'react-redux';
import Group from './group_item';

const mapStateToProps = state => {
    return {
        events: state.entities.events,
        groups: Object.values(state.entities.groups),
        users: state.entities.users
    }
};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Group)