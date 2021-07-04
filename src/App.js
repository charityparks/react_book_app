import React, { Component } from 'react';
import Products from './Products';
import UserForm from './UserForm';
import GitHub from './GitHub';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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
          <Switch>
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route path="/*" component={NotFound} />
          </switch>
        </div>
      </BrowserRouter>
    )
  }
}
