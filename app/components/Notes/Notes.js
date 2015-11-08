import React, { Component }   from 'react';

class Notes extends Component {
    render() {
        return (
            <div className="">
                Notes: <br />
                Username: {this.props.username} <br />
                NOtes: {this.props.notes}
            </div>
        );
    }
}

export default Notes;