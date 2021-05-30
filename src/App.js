import React, { Component } from 'react';
import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';
import UserForm from './UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
        <UserForm />

        {/* <Rating rating="1"/>
        <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
        <Rating rating="5"/> */}
        {/* <h1>
        My React Book App!</h1>
        <Products />
        <Button variant="danger">Default</Button> */}
      </div>
    );
  }
}

export default App;
