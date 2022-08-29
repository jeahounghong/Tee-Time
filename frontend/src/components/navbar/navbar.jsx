import { Link } from 'react-router-dom';
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
                <Link className="session-link" to="/events">Events</Link>
                <Link className="session-link" to="/groups">Groups</Link>
                <Link className="session-link" to={`/users/${this.props.currentUser.id}`}>Profile</Link>
            </div>
        )
    }

    render() {
        return (
            <div id="navbar">
                <div id="navbar-left">{`Welcome, ${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`}</div>
                
                <div id="navbar-right">
                    {this.sessionLinks()}
                </div>
            </div>
        )
    }
}

export default Navbar;