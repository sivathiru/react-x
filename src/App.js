import React, { Component } from 'react';
import './App.css';
import Login from '../src/components/authentication/login';
import Dashboard from './components/dashboard/dashboard';
import Task from './components/task/task';
import { BrowserRouter, Router, Route, Link, Switch, HashRouter } from 'react-router-dom';

class App extends Component { 
  render() {
    return (
       <HashRouter>
     
        <div className="App">
         
        
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/task" component={Task} />
         
           
          </div>
           {/* <Login /> */}
        </HashRouter>
    );
  }
}

export default App;