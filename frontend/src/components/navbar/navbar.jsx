import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBallTee, faCalendar, faUsers, faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { GrGroup } from 'react-icons/gr';
import { BsCalendarDate } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import '../../stylesheets/nav.css';
import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    sessionLinks() {
        if (this.props.currentUser){
            return (
                <div id="session-links">
                    <Link className="session-link" to="/events">
                        <div className="session-link-icon"><BsCalendarDate /></div>
                    </Link>
                    <Link className="session-link" to="/groups">
                        <div className="session-link-icon"><GrGroup /></div>
                    </Link>
                    <Link className="session-link" to={`/users/${this.props.currentUser.id}`}>
                        <div className="session-link-icon"><AiOutlineUser /></div>
                    </Link>
                    <Link className="session-link" to="/">
                        <div onClick={this.props.logout} className="session-link-icon"><BiExit /></div>
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div id="navbar">
                <div id="navbar-left">
                    <div id="navbar-logo">
                        <FontAwesomeIcon icon={faGolfBallTee}></FontAwesomeIcon>
                        <p id="navbar-slogan">Tee Times</p>
                    </div>
                </div>
                
                <div id="navbar-right">
                    {this.sessionLinks()}
                </div>
            </div>
        )
    }
}

export default Navbar;