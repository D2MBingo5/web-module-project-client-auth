import './App.css';

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <span>----</span>
          <Link to='/logout'>Logout</Link>
          {localStorage.getItem('token') && 
          <span>----</span>
          }
          {localStorage.getItem('token') && 
          <Link to='/'>Protected</Link>
          }
        </nav>

        <Switch>
          <PrivateRoute exact path='/' component={null}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Login}/>
        </Switch>
      </div>  
    </Router>    
  );
}

export default App;
