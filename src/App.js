import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Clients from './components/Clients';
import Workers from './components/Workers';
import Services from './components/Services';
import Settings from './components/Settings';
import Home from './components/Home';
import Cars from './components/Cars';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/clients" component={Clients}/>
            <Route path="/workers" component={Workers}/>
            <Route path="/services" component={Services}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/cars" component={Cars}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;