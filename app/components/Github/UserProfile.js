import React, { createClass }   from 'react';


const UserProfile = createClass({
    // These are to make sure the data is being passed in so the component can
    // render properly. Will get a warning in the console is there is something
    // missing or not the correct type.
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div className="">
                <h1> {this.props.username} </h1>
                {this.props.bio.login}
            </div>
        );
    }
});

export default UserProfile;