import ProfileModalContainer from './profile_modal_container';
import { Link } from 'react-router-dom';
import { MdGolfCourse } from 'react-icons/md';
import '../../stylesheets/nav.css';
import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayProfileModal: false,
        }
        this.toggleProfileModal = this.toggleProfileModal.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    toggleProfileModal() {
        this.setState({displayProfileModal: !this.state.displayProfileModal});
    }
    componentDidMount() {
        this.props.fetchUsers();
    }

    sessionLinks() {
        const tempUser = this.props.users[this.props.currentUser.id]
        return (
            <div id="session-links">
                <Link className="session-link" to="/events">
                    <div className="session-link-icon">Events</div>
                </Link>
                <Link className="session-link" to="/groups">
                    <div className="session-link-icon">Groups</div>
                </Link>
                <div className="session-link-profile" onClick={this.toggleProfileModal}>
                    {/* {this.props.currentUser ? this.props.currentUser.firstName.slice(0,1) : ""} */}
                    {tempUser ? <img src={tempUser.imageUrl} /> : ""}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.displayProfileModal ? <ProfileModalContainer toggleProfileModal={() => this.toggleProfileModal()} /> : ""}
                <div id="navbar">
                    <div id="navbar-left">
                        {/* <Link to="/groups"> */}
                            <div id="navbar-logo">
                                <MdGolfCourse />
                                <p id="navbar-slogan">Tee Times</p>
                            </div>
                        {/* </Link> */}
                    </div>
                    
                    <div id="navbar-right">
                        {this.sessionLinks()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;