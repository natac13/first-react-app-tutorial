import React, {createClass} from 'react';
import ReactDOM             from 'react-dom';
import Router            from 'react-router';
import routes            from './config/routes';

Router.run(routes, function(Root) {
    ReactDOM.render(<Root />, document.getElementById('app'));
});