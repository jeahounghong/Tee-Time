import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBallTee, faCalendar, faUsers, faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../../stylesheets/nav.css';
import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    sessionLinks() {
        return (
            <div id="session-links">
                <Link className="session-link" to="/events">
                    <div className="session-link-icon"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></div>
                </Link>
                <Link className="session-link" to="/groups">
                    <div className="session-link-icon"><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></div>
                </Link>
                <Link className="session-link" to={`/users/${this.props.currentUser.id}`}>
                    <div className="session-link-icon"><FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon></div>
                </Link>
                <Link className="session-link" to="/">
                    <div onClick={this.props.logout} className="session-link-icon"><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon></div>
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div id="navbar">
                <div id="navbar-left">
                    <div id="navbar-logo">
                        <FontAwesomeIcon icon={faGolfBallTee}></FontAwesomeIcon>
                        <p id="navbar-slogan">Tee Times</p>
                    </div>
                    {this.props.currentUser ? <p id="navbar-welcome">
                        {`Welcome, ${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`}
                    </p>: ""}
                </div>
                
                <div id="navbar-right">
                    {this.sessionLinks()}
                </div>
            </div>
        )
    }
}

export default Navbar;