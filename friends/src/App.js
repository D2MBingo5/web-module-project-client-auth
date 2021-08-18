import './App.css';

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

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
          <Link to='/friends'>Friends List</Link>
          }
        </nav>

        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Login}/>
        </Switch>
      </div>  
    </Router>    
  );
}

export default App;
