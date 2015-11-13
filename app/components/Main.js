import React, { Component } from 'react';
import SearchGithub         from './SearchGithub';

/**
 * https://github.com/rackt/react-router/blob/master/docs/API.md#route-components
 * this is a route component since it is served up by the route.js file and the
 * react-router.
 * The child components are not route components and therefore need either the
 * mixin version or to just pass the function down the component chain.
 */
class Main extends React.Component{
    render(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                {/* https://github.com/rackt/react-router/blob/master/docs/API.md#history-mixin */}
                        <SearchGithub history={this.props.history} />
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
          );
    }
}


export default Main;