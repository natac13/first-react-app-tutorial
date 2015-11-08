import React, {createClass} from 'react';
import Router               from 'react-router';
import ReactFireMixin       from 'reactfire';

/*** Components ***/
import UserProfile from './Github/UserProfile';
import Repos       from './Github/Repos';
import Notes       from './Notes/Notes';

const Profile = createClass({
    mixin: [ReactFireMixin],

    getInitialState() {
        return {
            notes: ['note1', 'note2'],
            bio: {name: 'Natac13456'},
            repos: [1, 2, 3, 4]
        };
    },

    render() {
        // get username from the URL which is in routes.js; also where the
        // .username comes from
        let { username } = this.props.params;

        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio.name} />
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes} />
                </div>
            </div>
        );
    }
});

export default Profile;