import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBallTee, faCalendar, faUsers, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import '../../stylesheets/splash.css';

const Splash = () => {
  return (
    <div className="splash-container">
        <div className="splash-left-container">
          <div id="navbar-logo">
              <FontAwesomeIcon icon={faGolfBallTee}></FontAwesomeIcon>
              <p id="navbar-slogan">Tee Times</p>
          </div>
          <h3 className="splash-logo-text-description">Connect with other players with a passion for the lovely sport of golf. Play anywhere and anytime.</h3>
          <Link to={'/signup'}>
            <button className="splash-signup-button">Sign Up</button>
          </Link>
          <div className="splash-login-container">
            <h3 className="splash-login-redirect-text">Already have an account?</h3>
            <Link to={'/login'}>
              <h3 className="splash-login-redirect-link">Log in instead.</h3>
            </Link>
          </div>
        </div>
        <div className="splash-right-container">
          <div id="splash-img">
            <img src="https://cdn.dribbble.com/userupload/3079475/file/original-244e5f4b6e1e4476050c9b83515c74fd.jpg?compress=1&resize=1600x1200" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Splash;