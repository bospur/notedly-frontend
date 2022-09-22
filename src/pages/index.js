import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Favorites from './favorites';
import Home from './home';
import Mynotes from './mynotes';

const Pages = () => {
    return (
       <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/mynotes">
                <Mynotes />
            </Route>
            <Route path="/favorites">
                <Favorites />
            </Route>
       </Switch>
    );
}

export default Pages;
