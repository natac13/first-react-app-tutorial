import React, { createClass } from 'react';


const NotesList = createClass({
    render() {
        console.log(this.props.notes);
        const notes = this.props.notes.map((note, index) => {
            return (
                <li className="list-group-item" key={index} >{note}</li>
            );
        });
        return (
            <ul className="list-group">
                {notes}
            </ul>
        );
    }
});

export default NotesList;