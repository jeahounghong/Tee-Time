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
                <div className="dev-profile-image">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGxuH2tbhQG4A/profile-displayphoto-shrink_800_800/0/1564471233730?e=1667433600&v=beta&t=GsGovfWd8oBqGm2KSQWHKspNyrzsGxH3r3GoDOeJW2M" alt="" />
                </div>
                <div className="dev-profile-information">
                    <div className="dev-profile-name">Calvin Koo</div>
                    <div className="dev-profile-title">FrontEnd Flex</div>
                    <div className="dev-profile-description">Hey All! I am a software engineer with a passion for include rest of description.</div>
                </div>
                <div className="dev-profile-links">
                    <a href=""><img className='dev-profile-icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    <a href=""><img className='dev-profile-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>
                    <a href=""><FontAwesomeIcon className="dev-profile-icon" icon={faUserCircle}></FontAwesomeIcon></a>
                    <a href=""><img className='dev-profile-icon' src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" alt="" /></a> 
                </div>
            </div>
            <div className="dev-profile-item">
                <div className="dev-profile-image">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGxuH2tbhQG4A/profile-displayphoto-shrink_800_800/0/1564471233730?e=1667433600&v=beta&t=GsGovfWd8oBqGm2KSQWHKspNyrzsGxH3r3GoDOeJW2M" alt="" />
                </div>
                <div className="dev-profile-information">
                    <div className="dev-profile-name">Calvin Koo</div>
                    <div className="dev-profile-title">FrontEnd Flex</div>
                    <div className="dev-profile-description">Hey All! I am a software engineer with a passion for include rest of description.</div>
                </div>
                <div className="dev-profile-links">
                    <a href=""><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>
                    <a href=""><FontAwesomeIcon className="dev-profile-icon" icon={faUserCircle}></FontAwesomeIcon></a>
                    <a href=""><img src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" alt="" /></a> 
                </div>
            </div><div className="dev-profile-item">
                <div className="dev-profile-image">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGxuH2tbhQG4A/profile-displayphoto-shrink_800_800/0/1564471233730?e=1667433600&v=beta&t=GsGovfWd8oBqGm2KSQWHKspNyrzsGxH3r3GoDOeJW2M" alt="" />
                </div>
                <div className="dev-profile-information">
                    <div className="dev-profile-name">Calvin Koo</div>
                    <div className="dev-profile-title">FrontEnd Flex</div>
                    <div className="dev-profile-description">Hey All! I am a software engineer with a passion for include rest of description.</div>
                </div>
                <div className="dev-profile-links">
                    <a href=""><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>
                    <a href=""><FontAwesomeIcon className="dev-profile-icon" icon={faUserCircle}></FontAwesomeIcon></a>
                    <a href=""><img src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" alt="" /></a> 
                </div>
            </div><div className="dev-profile-item">
                <div className="dev-profile-image">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGxuH2tbhQG4A/profile-displayphoto-shrink_800_800/0/1564471233730?e=1667433600&v=beta&t=GsGovfWd8oBqGm2KSQWHKspNyrzsGxH3r3GoDOeJW2M" alt="" />
                </div>
                <div className="dev-profile-information">
                    <div className="dev-profile-name">Calvin Koo</div>
                    <div className="dev-profile-title">FrontEnd Flex</div>
                    <div className="dev-profile-description">Hey All! I am a software engineer with a passion for include rest of description.</div>
                </div>
                <div className="dev-profile-links">
                    <a href=""><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>
                    <a href=""><FontAwesomeIcon className="dev-profile-icon" icon={faUserCircle}></FontAwesomeIcon></a>
                    <a href=""><img src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" alt="" /></a> 
                </div>
            </div>
            
            
        </div>
    </div>
  )
};
