import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import NavBarContainer from '../navbar/navbar_container';
import '../../stylesheets/about.css'

export const About = () => {
  return (
    <div className='about-page-container'>
        <NavBarContainer />
        <h1 className='devs'>Meet the Developers</h1>
        <div className="dev-profile-container">
            <div className="dev-profile-item">
                <div className="dev-profile-left">
                    <div className="dev-profile-information">
                        <div className="dev-profile-name">Mike Shen</div>
                        <div className="dev-profile-title">Team Lead</div>
                    </div>
                    <div className="dev-profile-image">
                        <img src="https://ca.slack-edge.com/T03GU501J-U03FSTGB12B-9c69844b08ae-192" alt="" />
                    </div>
                </div>
                <div className="dev-profile-links">
                    <a href="https://github.com/shenshuu"><img className='dev-profile-icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/calvin-koo-9aa869158/"><img className='dev-profile-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>
                    <a href=""><FontAwesomeIcon className="dev-profile-icon" icon={faUserCircle}></FontAwesomeIcon></a>
                    <a href="https://angel.co/u/kyung-koo"><img className='dev-profile-icon' src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" alt="" /></a> 
                </div>
            </div>
            <div className="dev-profile-item">
                <div className="dev-profile-left">
                    <div className="dev-profile-information">
                        <div className="dev-profile-name">David Hong</div>
                        <div className="dev-profile-title">Backend Flex</div>
                    </div>
                    <div className="dev-profile-image">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGWz2A2orT5uA/profile-displayphoto-shrink_800_800/0/1552154308118?e=1667433600&v=beta&t=NvMqCR4vbtOF9HrUZ_EhJ3BBzFHozAad1hlOow2L--E" alt="" />
                    </div>
                </div>
                <div className="dev-profile-links">
                    <a href="https://github.com/jeahounghong"><img className='dev-profile-icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/calvin-koo-9aa869158/"><img className='dev-profile-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>
                    <a href=""><FontAwesomeIcon className="dev-profile-icon" icon={faUserCircle}></FontAwesomeIcon></a>
                    <a href="https://angel.co/u/kyung-koo"><img className='dev-profile-icon' src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" alt="" /></a> 
                </div>
            </div>
            <div className="dev-profile-item">
                <div className="dev-profile-left">
                    <div className="dev-profile-information">
                        <div className="dev-profile-name">Torben Ginsberg</div>
                        <div className="dev-profile-title">Backend Flex</div>
                    </div>
                    <div className="dev-profile-image">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGy9qNUqoGvKA/profile-displayphoto-shrink_800_800/0/1631624139985?e=1667433600&v=beta&t=VYHLzT9PEvWhNg-J5R4JX_uaUH8Z_GdzEw5-lKTxaWM" alt="" />
                    </div>
                </div>
                <div className="dev-profile-links">
                    <a href="https://github.com/torbenginsberg"><img className='dev-profile-icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/calvin-koo-9aa869158/"><img className='dev-profile-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>
                    <a href=""><FontAwesomeIcon className="dev-profile-icon" icon={faUserCircle}></FontAwesomeIcon></a>
                    <a href="https://angel.co/u/kyung-koo"><img className='dev-profile-icon' src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" alt="" /></a> 
                </div>
            </div>
            <div className="dev-profile-item">
                <div className="dev-profile-left">
                    <div className="dev-profile-information">
                        <div className="dev-profile-name">Calvin Koo</div>
                        <div className="dev-profile-title">FrontEnd Flex</div>
                    </div>
                    <div className="dev-profile-image">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGxuH2tbhQG4A/profile-displayphoto-shrink_800_800/0/1564471233730?e=1667433600&v=beta&t=GsGovfWd8oBqGm2KSQWHKspNyrzsGxH3r3GoDOeJW2M" alt="" />
                    </div>
                </div>
                <div className="dev-profile-links">
                    <a href="https://github.com/ckoo13"><img className='dev-profile-icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/calvin-koo-9aa869158/"><img className='dev-profile-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>
                    <a href=""><FontAwesomeIcon className="dev-profile-icon" icon={faUserCircle}></FontAwesomeIcon></a>
                    <a href="https://angel.co/u/kyung-koo"><img className='dev-profile-icon' src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" alt="" /></a> 
                </div>
            </div>
        </div>
    </div>
  )
};
