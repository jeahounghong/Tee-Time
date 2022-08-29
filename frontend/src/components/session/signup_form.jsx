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
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
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
                        <p id="login-header-info">Connect with other players with a passion for the lovely sport of golf. Play anywhere and anytime.</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-form-input">
                            <label>First Name:</label>
                            <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
                        </div>
                        <div className="signup-form-input">
                            <label>Last Name:</label>
                            <input type="text" value={this.state.lastName} onChange={this.update('lastName')}/>
                        </div>
                        <div className="signup-form-input">
                            <label>Email:</label>
                            <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        </div>
                        <div className="signup-form-input">
                            <label>Password:</label>
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </div>
                        <div className="signup-form-input">
                            <label>Confirm Password:</label>
                            <input type="password" value={this.state.password2} onChange={this.update('password2')}/>
                        </div>
                        <div className="login-form-footer">
                            <button id="signup-button" type="login">Sign up</button>
                            <div className="splash-login-container">
                            <p id="login-footer-info">Already have an account? <Link id="signup-link" to="/login">Login</Link></p>
                            </div>
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