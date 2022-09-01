import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBallTee} from '@fortawesome/free-solid-svg-icons';
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
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo(e) {
        e.preventDefault();

        // fill in with demo user information
        const demoUser = {
            email: 'twoods@gmail.com',
            password: 'password'
        }
        this.props.login(demoUser);
        this.setState({
            email: '',
            password: ''
        });

        this.props.history.push('/events');
    }

    componentDidMount() {
        if (Object.values(this.props.users).length === 0) {
            this.props.fetchUsers();
        }
        if (Object.values(this.props.events).length === 0) {
            this.props.fetchEvents();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.login(this.state);
        this.setState({
            email: '',
            password: '',
        });
        this.props.history.push('/events');
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
                <div id="login-form-container">
                    <div className="login-header-container">
                        <p id="login-header">Log In</p>
                        <p id="login-header-info">Connect with other players with a passion for the lovely sport of golf. Play anywhere and anytime.</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="login-form-input">
                            <label id='login-form-input-email'>Email</label>
                            <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        </div>
                        <div className="login-form-input">
                            <label>Password</label>
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </div>
                        <button className="login-btn" type="login">Login</button>
                        <button onClick={this.handleDemo} className="login-btn" id='demo-login'>Demo User</button>
                        <p id="login-footer-info">Don't have an account? <Link id="signup-link" to="/signup">Sign up</Link></p>
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