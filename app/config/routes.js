'use strict';

import React, {Component}            from 'react';
import Router, {DefaultRoute, Route} from 'react-router';

/*** Components ***/
import Main                          from '../components/Main';
import Home                          from '../components/Home';
import Profile                       from '../components/Profile';

/**
 * The RouteHandler section in Main.js is where the child 'element' gets swapped
 * out each time; either DefaultRoute or others.
 * Since the Main route is the top level element then it will always show;
 * meaning the contents of render will be the webpage and the RouteHandler will
 * be populated by the child route shown here based off the URL path.
 */
const routes = (
    <Route name="app" path="/" handler={Main}>
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
);

export default routes;
