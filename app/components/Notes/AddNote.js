import React, { createClass } from 'react';

const AddNote = createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },

    /**
     * finds the input value via the refs tag and clears it then passed the
     * captured valued to the handleAddNote function that was passed down
     * from the Profile.js component where the state lives.
     * @return {[type]} [description]
     */
    handleSubmit() {
        let newNote = this.refs.note.value;
        this.refs.note.value = '';
        this.props.addNote(newNote);
    },

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note"
                    placeholder="Add New Note" />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button"
                        onClick={this.handleSubmit}>Submit
                    </button>
                </span>
            </div>
        );
    }
});

export default AddNote;