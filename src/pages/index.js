import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Favorites from './favorites';
import Home from './home';
import Login from './login';
import Mynotes from './mynotes';
import NotePage from './notePage';
import Registration from './registration';

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
            <Route path="/note/:id">
                <NotePage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/registration">
                <Registration />
            </Route>
       </Switch>
    );
}

export default Pages;
