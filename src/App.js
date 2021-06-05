import React, { Component } from 'react';
import Products from './Products';
import UserForm from './UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
        <UserForm />

       
      </div>
    );
  }
}

export default App;
