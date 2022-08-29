import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/login' component={LoginFormContainer} />
        </Switch>
    </div>
);

export default App;