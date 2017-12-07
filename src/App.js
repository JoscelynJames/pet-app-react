import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Splash from './components/Splash';
import Stream from './components/Stream';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Splash}/>
            <Route exact path="/stream" component={Stream}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
