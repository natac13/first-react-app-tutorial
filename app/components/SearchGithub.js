import React, { createClass } from 'react';

const SearchGithub = createClass({

    handleSubmit() {
        // https://github.com/rackt/react-router/blob/master/docs/API.md#history-mixin
        const {history} = this.props;
        const username = this.refs.username.value;
        // https://github.com/rackt/history/blob/master/docs/GettingStarted.md#navigation
        history.pushState(null, `profile/${username}`);

    },

    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control"
                            ref="username" />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="sumbit"
                            className="btn btn-block btn-primary">Search Github
                        </button>
                    </div>
                </form>
            </div>
        );
    }
});

export default SearchGithub;