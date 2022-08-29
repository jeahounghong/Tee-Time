import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/login.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            email: '',
            password: '',
        });
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    render() {
        return (
            <div className="session-form-container">
                <div id="login-form-container">
                    <div className="login-header-container">
                        <p id="login-header">Log In</p>
                        <p id="login-header-info">Some additional text here describing tee time</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="login-form-input">
                            <label>Email</label>
                            <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        </div>
                        <div className="login-form-input">
                            <label>Password</label>
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </div>
                        <div className="login-form-footer">
                            <button id="login-btn" type="login">Sign in</button>
                            <p id="login-footer-info">Don't have an account? <Link id="signup-link" to="/signup">Sign up</Link></p>
                        </div>
                    </form>
                </div>
                <div className="session-form-image" id="splash-img">
                    <img src="https://cdn.dribbble.com/userupload/3079475/file/original-244e5f4b6e1e4476050c9b83515c74fd.jpg?compress=1&resize=1600x1200" alt="" />
                </div>
            </div>
        )
    }
}
export default LoginForm;