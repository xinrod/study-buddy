import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import 'tachyons';

import Profile from './components/Home/Profile';
import SearchBar from './components/Home/SearchBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <SearchBar/>
      
      <nav className="dt w-100 border-box pa3 ph5-ns">
                <Link to='/' className="grow link dim black f1 f4-ns dib mr3 mr4-ns" title="Home">
                    Buddy Study 
                </Link>
                <Link to='/' className="grow link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="Home">
                    Home
                </Link>
                <Profile className="link dim dark-gray f6 f5-ns dib"/>
                <div className="grow dtc v-mid w-75 tr">
                    <Link to='/signin' className="link dim dark-gray f6 f5-ns dib" href="#" title="signout">Sign Out</Link>
                </div>
                
      </nav>
      <Switch>
        <Route exact path="/">
        <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
          <Home/>
          </section>
        </Route>
        <Route path="/about">
          {Signin()}
        </Route>
      </Switch>
    </Router>
  );
}


function Signin() {
  return <h2>signin</h2>;
}

function Users() {
  return <h2>Users</h2>;
}