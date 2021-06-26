import React, { Component } from 'react';
import Products from './Products';
import UserForm from './UserForm';
import GitHub from './GitHub';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products /> 
        <UserForm />
        <GitHub />     
      </div>
    );
  }
}

export default App;
