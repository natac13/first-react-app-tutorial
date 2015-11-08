import React, { Component }   from 'react';
import Rebase                 from 're-base';


import UserProfile from './Github/UserProfile';
import Repos       from './Github/Repos';
import Notes       from './Notes/Notes';


var base = Rebase.createClass('https://resplendent-heat-8246.firebaseio.com/');



class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: ['test','note'],
            bio: {},
            repos: []
        };
    }

    init(){
        const { username } = this.props.params;
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'bio'
        });

    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }


    render(){
        const { username } = this.props.params;
        return (
          <div className="row">
            <div className="col-md-4">
                <UserProfile username={username} />
                {username}
            </div>
            <div className="col-md-4">
                <Repos username={username} />
            </div>
            <div className="col-md-4">
                <Notes username={username} notes={this.state.notes} />
            </div>
          </div>
        );
    }
}

export default Profile;
