import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import reset from '../stylesheets/reset.css';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import EventsContainer from '../components/events/events_container';
import GroupsContainer from '../components/groups/groups_container';
import ProfileContainer from './profile/profile_container';
import NavbarContainer from './navbar/navbar_container';
import AboutContainer from './about/about_container';
import FriendProfileContainer from './profile/friend_profile_container';


const App = () => (
    <div>   
        {/* <NavbarContainer /> */}
        <Switch>    
            <AuthRoute exact path='/' component={SplashContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <ProtectedRoute path='/events' component={EventsContainer} />
            <ProtectedRoute path='/groups' component={GroupsContainer} />
            <ProtectedRoute path ='/users' component={ProfileContainer} />
            <ProtectedRoute path ='/about' component={AboutContainer} />
            <ProtectedRoute exact path='/member/:id' component={FriendProfileContainer} />
        </Switch>
    </div>
);

export default App;