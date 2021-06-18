import React, { Component } from 'react'
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading';

class GitHub extends Component {

    constructor() {
        super();
        this.state = {
            isLoading : true
        };
    }

componentDidMount() {
    this.getGitHubData('greg');
}

    getGitHubData (_searchTerm) {
        axios.get ("https://api.github.com/search/users?q="+_searchTerm)
        .then (res => {
            this.setState ({
                isLoading : false,
            })
            console.log(res.data.items);
        });
    }
    
    render() {
        return (
            <div>
                { this.state.isLoading && 
                <h4>Getting data...</h4> }
            </div>
        );
    }
}
export default GitHub;