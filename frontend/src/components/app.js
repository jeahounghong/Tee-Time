import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash';
import { Switch } from 'react-router-dom';

const App = () => (
    <div>
        <Route path='/' component={Splash} />
    </div>
);

export default App;