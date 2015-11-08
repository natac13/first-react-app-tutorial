import React, {createClass} from 'react';
import {RouteHandler} from 'react-router';

const Main = createClass({
    render() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        MENUsssss
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

export default Main;