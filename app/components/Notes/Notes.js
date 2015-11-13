import React, { createClass } from 'react';
import NotesList              from './NotesList';
import AddNote                from './AddNote';

const Notes = createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired
    },

    render() {
        // NotesList component handles the styling and li elements
        return (
            <div >
                <h2>Notes For: {this.props.username} </h2>
                <AddNote addNote={this.props.addNote} username={this.props.username}/>
                <NotesList notes={this.props.notes} />
            </div>
        );
    }
});

export default Notes;