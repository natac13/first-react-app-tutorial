import React, { createClass }   from 'react';


const Repos = createClass({
    // These are to make sure the data is being passed in so the component can
    // render properly. Will get a warning in the console is there is something
    // missing or not the correct type.
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },

    render() {
        return (
            <div className="">
                {this.props.repos}
            </div>
        );
    }
});

export default Repos;