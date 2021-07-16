import React, { Component } from 'react';

class GitHubUser extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>User Login: {this.props.match.params.login }</h1>
                <h2>User Id: {this.props.match.params.id }</h2>
            </div>
                
        );
    }
}

export default GitHubUser;