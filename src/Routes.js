import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/home';
import Repos from './pages/repos';

const Router = () => (
    <BrowserRouter>
       <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" component={ Repos } />
        </Switch>
    </BrowserRouter>
)

export default Router;