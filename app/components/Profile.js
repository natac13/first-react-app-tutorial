import React, { createClass }   from 'react';
import Rebase                   from 're-base';
import Firebase                 from 'firebase';
import ReactFireMixin           from 'reactfire'


import UserProfile from './Github/UserProfile';
import Repos       from './Github/Repos';
import Notes       from './Notes/Notes';


// var base = Rebase.createClass('https://resplendent-heat-8246.firebaseio.com/');



const Profile = createClass({
    mixins: [ReactFireMixin],
    getInitialState() {
        return {
            notes: [],
            bio: {},
            repos: [1, 2, 3]
        };
    },



    componentDidMount() {
        const { username } = this.props.params;
        // will bind the notes property to the notes from Firebase base off the
        // username.
        // I could not get the normal ReactFirebase to work so I went with Tyler's
        // re-base wrapper for it
        // this.ref = base.bindToState(username, {
        //     context: this,
        //     asArray: true,
        //     state: 'notes'
        // });
        //
        //
        // Able to get the normal Firebase way to work by changing .bindAsArray()
        // to .bindAsObject()!!!
        console.log(typeof username);
        this.ref = new Firebase('https://resplendent-heat-8246.firebaseio.com/');
        var childRef = this.ref.child(username);
        this.bindAsObject(childRef, 'notes');
    },


    componentWillUnmount() {
        // base.removeBinding(this.ref);
        this.unbind('notes');
    },


    render(){
        const { username } = this.props.params;
        return (
          <div className="row">
            <div className="col-md-4">
                <UserProfile username={username} bio={this.state.bio} />
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
