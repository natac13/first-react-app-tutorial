import React, {Component}            from 'react';
import Router, {DefaultRoute, Route} from 'react-router';
import Main                          from '../components/Main';
import Home                          from '../components/Home';

const routes = (
    <Route name="app" path="/" handler={Main}>

    </Route>
);

export default routes;
