import './App.css';

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>

        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Login}/>
        </Switch>
      </div>  
    </Router>    
  );
}

export default App;
