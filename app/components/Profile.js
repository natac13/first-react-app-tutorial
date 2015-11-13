import React, { createClass }   from 'react';
import Rebase                   from 're-base';
import Firebase                 from 'firebase';
import ReactFireMixin           from 'reactfire';

/*** components ***/
import UserProfile              from './Github/UserProfile';
import Repos                    from './Github/Repos';
import Notes                    from './Notes/Notes';

/*** API helper ***/
import helpers        from '../utils/helpers';


var base = Rebase.createClass('https://resplendent-heat-8246.firebaseio.com/');



const Profile = createClass({
    mixins: [ReactFireMixin],
    getInitialState() {
        return {
            notes: [],
            bio: {},
            repos: [1]
        };
    },

    init() {
        const { username } = this.props.params;
        // will bind the notes property to the notes from Firebase base off the
        // username.
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'notes'
        });


        // Able to get the normal Firebase way to work by changing .bindAsArray()
        // to .bindAsObject()!!!
        //
        // NOT REALLY working since it changes the state to an object I think.
        // this.ref = new Firebase('https://resplendent-heat-8246.firebaseio.com/');
        // const childRef = this.ref.child(username);
        // this.bindAsObject(childRef, 'notes');


        /**
         * getGithubInfo returns an object with 2 properties which I use
         * destructuring for the function params.
         */
        helpers.getGithubInfo(username)
            .then(({ repos, bio }) => {
                this.setState({
                    bio: bio,
                    repos: repos
                });
            });
    },

    componentDidMount() {
        this.init();
    },

    componentWillUnmount() {
        base.removeBinding(this.ref);
        // this.unbind('notes');
    },

    componentWillReceiveProps(){
        // this.unbind('notes');
        base.removeBinding(this.ref);
        this.init();
    },

    /**
     * Handle dealing with the state of the app in the component where the state
     * lives and then this functions is passed down through the child components
     * to the AddNote.js component which utilizes the function on a button.
     * @param  {string} newNote the input from the user is obtained by the React
     * refs on the HTML tag and using this.refs.whatever.value to get the value
     */
    handleAddNote(newNote) {
        // this.ref.child(this.props.params.username)
        //     .set(this.state.notes.concat([newNote]));
        const {username} = this.props.params;
        base.post(username, {
            data: this.state.notes.concat([newNote])
        });
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
                <Notes
                    username={username}
                    notes={this.state.notes}
                    addNote={this.handleAddNote}
                />
            </div>
          </div>
        );
    }
});

export default Profile;
