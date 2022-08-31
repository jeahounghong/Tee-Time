import { connect } from "react-redux";
import GroupShow from "./group_show";

const mapStateToProps = state => {
    return {
        events: state.entities.events
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow)