import React, { createClass }   from 'react';


const Repos = createClass({
    // These are to make sure the data is being passed in so the component can
    // render properly. Will get a warning in the console is there is something
    // missing or not the correct type.
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },



    // This way what was causing the error about React not accepting objects
    // and to use createFragment or an array to fix.
    render() {
        var repos = this.props.repos.map((repo, index) => {
            return (
                <li className="list-group-item" key={index}>
                    {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                    {repo.description && <p> {repo.description}</p>}
                </li>
                );
        });
        return (
            <div>
                <h3> User Repos </h3>
                <ul className="list-group">
                    {repos}
                </ul>
            </div>
        );
    }
});

export default Repos;