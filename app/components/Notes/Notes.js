import React, {createClass} from 'react';

const Notes = createClass({
    render() {
        return (
            <div className="">
                Notessss!
                Notes: {this.props.notes}
            </div>
        );
    }
});

export default Notes;