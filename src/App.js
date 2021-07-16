import React, { Component } from 'react';
// import Products from './Products';
// import UserForm from './UserForm';
import GitHub from './GitHub';
import About from './About';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header /> 
      </div>

      // <div className="App">
      //   <Products /> 
      //   <UserForm />
      //   <GitHub />     
      // </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div> 
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/About"> About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div> 
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return (
      <div>
        NotFound
      </div>
    )
  }
}
