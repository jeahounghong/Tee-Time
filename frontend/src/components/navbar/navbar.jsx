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
        this.renderNavbar = this.renderNavbar.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    toggleProfileModal() {
        this.setState({displayProfileModal: !this.state.displayProfileModal});
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (Object.values(prevProps.users).length !== Object.values(this.props.users).length) {
            this.setState({displayProfileModal: this.state.displayProfileModal});
        }
    }

    sessionLinks() {
        // if (this.props.currentUser){
            return (
                <div id="session-links">
                    <Link className='session-link' to='/about'>
                        <div className="session-link-icon">About</div>
                    </Link>
                    <Link className="session-link" to="/events">
                        <div className="session-link-icon">Events</div>
                    </Link>
                    <Link className="session-link" to="/groups">
                        <div className="session-link-icon">Groups</div>
                    </Link>
                    <div className="session-link-profile" onClick={this.toggleProfileModal}>
                        {this.props.currentUser && 
                        this.props.users[this.props.currentUser.id]
                         ? 
                        this.props.users[this.props.currentUser.id].imageUrl ?
                        <img src={this.props.users[this.props.currentUser.id].imageUrl} /> : 
                        this.props.currentUser.firstName.slice(0, 1)
                        : ""}
                    </div>
                    {/* <div onClick={() => this.props.logout()}>Sign out</div> */}
                </div>
            )
        
    }

    renderNavbar() {
        return (
            <div>
                {this.state.displayProfileModal ? <ProfileModalContainer toggleProfileModal={() => this.toggleProfileModal()} /> : ""}
                <div id="navbar">
                    <div id="navbar-left">
                        <div id="navbar-logo" onClick={() => this.props.history.push('/events')}>
                            <MdGolfCourse />
                            <p id="navbar-slogan">Tee Times</p>
                        </div>
                    </div>
                    
                    <div id="navbar-right">
                        {this.sessionLinks()}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.props.currentUser && this.renderNavbar();
    }
}

export default Navbar;