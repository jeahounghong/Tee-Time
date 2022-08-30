import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import reset from '../stylesheets/reset.css';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import EventsContainer from '../components/events/events_container';
import GroupsContainer from '../components/groups/groups_container'

const App = () => (
    <div>
        {/* <NavbarContainer /> */}
        <Switch>
            <Route exact path='/' component={Splash} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <Route exact path='/events' component={EventsContainer} />
            <Route exact path='/groups' component={GroupsContainer} />
        </Switch>
    </div>
);

export default App;