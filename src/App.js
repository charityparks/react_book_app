import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
        My React Book App!</h1>
        <Products />
        <Button>Default</Button>
      </div>
    );
  }
}

export default App;
