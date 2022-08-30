import { connect } from 'react-redux';
import EventItem from './event_item';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.user.id],
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);