import React from 'react';
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
                        <button type="login">Sign in</button>
                        <p>Don't have an account? </p>
                    </div>
                </form>
            </div>
        )
    }
}
export default LoginForm;