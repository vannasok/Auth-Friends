import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Component } from 'react';
import FriendList from './components/FriendList';
import './App.css';
import LoginPage from './components/LoginPage';

import PrivateRoute from './components/PrivateRoute';

import './App.css';

class App extends Component {
   render() {
      return (
         <div>
            <ul>
               <li>
                  <Link to='/login'>Login</Link>
               </li>
               <li>
                  <Link to='/friendlist'>Friend List</Link>
               </li>
            </ul>
            <h3>Friend List: </h3>
            <div>
               <PrivateRoute path='/friendlist' component={FriendList} />
               <Route path='/login' component={LoginPage} />
               <Route component={LoginPage} />
            </div>
         </div>
      );
   }
}

export default App;
