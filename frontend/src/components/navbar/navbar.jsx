import ProfileModalContainer from './profile_modal_container';
import { Link } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
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

    sessionLinks() {
        if (this.props.currentUser){
            return (
                <div id="session-links">
                    <Link className="session-link" to="/events">
                        <div className="session-link-icon">Events</div>
                    </Link>
                    <Link className="session-link" to="/groups">
                        <div className="session-link-icon">Groups</div>
                    </Link>
                    <div className="" to={`/users/${this.props.currentUser.id}`}>
                        <div className="session-link-profile" onClick={this.toggleProfileModal}>
                            {this.props.currentUser.firstName.slice(0,1)}
                        </div>
                    </div>
                    {/* <Link className="session-link" to="/">
                        <div onClick={this.props.logout} className="session-link-icon"><BiExit /></div>
                    </Link> */}
                </div>
            )
        }
    }

    render() {
        return (
            <div id="navbar">
                {this.state.displayProfileModal ? <ProfileModalContainer toggleProfileModal={() => this.toggleProfileModal()} /> : ""}
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
        )
    }
}

export default Navbar;