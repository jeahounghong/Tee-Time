import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBallTee} from '@fortawesome/free-solid-svg-icons';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    }

    componentDidMount() {
        if (Object.values(this.props.events).length === 0) {
            this.props.fetchEvents();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: ''
        });
        this.props.signup(this.state);
        // this.props.history.push('/events');
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    renderErrors(field) {
        switch(field) {
            case 'firstName':
                return (
                    <div className="firstName-errors">
                        {this.props.errors.firstName}
                    </div>
                );
            case 'lastName':
                return (
                    <div className="lastName-errors">
                        {this.props.errors.lastName}
                    </div>
                );
            case 'email':
                return (
                    <div className="email-signup-errors">
                        {this.props.errors.email}
                    </div>
                );
            case 'password':
                return (
                    <div className="password-signup-errors">
                        {this.props.errors.password}
                    </div>
                );
            case 'password2':
                return (
                    <div className="password2-errors">
                        {this.props.errors.password2}
                    </div>
                );
            default: 
                    return (<div className="default"></div>)
        }
    }

    clearErrors() {
        this.props.clearSessionErrors();
    }

    render() {
        return (
            <div className="session-form-container">
                <Link to={'/'}>
                    <div id="session-logo">
                            <FontAwesomeIcon icon={faGolfBallTee}></FontAwesomeIcon>
                            <p id="navbar-slogan-splash">Tee Times</p>
                    </div>
                </Link>
                <div id="signup-form-container">
                    <div className="login-header-container">
                        <p id="login-header">Sign Up</p>
                        <p id="signin-header-info">Connect with other players with a passion for the lovely sport of golf. Play anywhere and anytime.</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-form-input">
                            <label>First Name: {this.renderErrors('firstName')}</label>
                            <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
                        </div>
                        <div className="signup-form-input">
                            <label>Last Name: {this.renderErrors('lastName')}</label>
                            <input type="text" value={this.state.lastName} onChange={this.update('lastName')}/>
                        </div>
                        <div className="signup-form-input">
                            <label>Email: {this.renderErrors('email')}</label>
                            <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        </div>
                        <div className="signup-form-input">
                            <label>Password: {this.renderErrors('password')}</label>
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </div>
                        <div className="signup-form-input">
                            <label>Confirm Password: {this.renderErrors('password2')}</label>
                            <input type="password" value={this.state.password2} onChange={this.update('password2')}/>
                        </div>
                        <div className="login-form-footer">
                        <p id="signin-footer-info">Already have an account? <Link onClick={this.clearErrors} id="signup-link" to="/login">Login</Link></p>
                            <button id="signup-btn" type="login">Sign up</button>
                        </div>
                    </form>
                </div>
                <div className="session-form-image" id="splash-img">
                    <img src="https://cdn.dribbble.com/userupload/3079475/file/original-244e5f4b6e1e4476050c9b83515c74fd.jpg?compress=1&resize=1600x1200" alt="" />
                </div>
            </div>
        )
    }
};

export default SignUpForm;