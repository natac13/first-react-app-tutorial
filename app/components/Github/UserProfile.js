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
        const { bio } = this.props;
        const fieldNames = ['name', 'login', 'email', 'location', 'company',
        'public_repos', 'public_gists', 'followers', 'following'];
        const fields = fieldNames.map((item, index) => {
            if(item == 'blog') {
                return (!!bio[item] &&
                    <li className="list-group-item" key={index}>
                        {item}: <a href={bio[item]}>{bio[item]}</a>
                    </li>
                );
            }
            return (
                <li className="list-group-item" key={index}>{item}: {bio[item]}</li>
            );
        });

        return (
            <div className="">
                <h1> {this.props.username} </h1>
                <ul className="list-group">
                    {!!bio.avatar_url &&
                        <img src={this.props.bio.avatar_url}
                        className="img-circle img-responsive list-group-item"/>
                    }
                    {fields}
                    {!!bio.blog &&
                        <li className="list-group-item">
                            Blog: <a href={bio.blog} target="_blank">{bio.blog}</a>
                        </li>
                    }
                </ul>
            </div>
        );
    }
});

export default UserProfile;