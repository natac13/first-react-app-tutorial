import React, {createClass} from 'react';

const UserPorfile = createClass({
    render() {
        return (
            <div className="">
                UserPorfile <br />
                Username: {this.props.username} <br />
                Bio: {this.props.bio}
            </div>
        );
    }
});

export default UserPorfile;