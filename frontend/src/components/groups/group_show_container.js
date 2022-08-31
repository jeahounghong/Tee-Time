import { connect } from "react-redux";
import GroupShow from "./group_show";

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow)