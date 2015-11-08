import React, {createClass} from 'react';

const Repos = createClass({
    render() {
        return (
            <div className="">
                Repooosss!!!!!!!!!!
                Repos: {this.props.repos.join(';')}
            </div>
        );
    }
});

export default Repos;