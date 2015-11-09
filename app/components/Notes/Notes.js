import React, { createClass } from 'react';
import NotesList              from './NotesList';

const Notes = createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired
    },

    render() {
        // NotesList component handles the styling and li elements
        return (
            <div className="">
                <h2>Notes For: {this.props.username} </h2>
                <NotesList notes={this.props.notes} />
            </div>
        );
    }
});

export default Notes;