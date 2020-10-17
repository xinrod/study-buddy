import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import 'tachyons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav className="dt w-100 border-box pa3 ph5-ns">
                <Link to='/' className="grow link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="Home">
                    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
                    Buddy Study
                </Link>
                <div className="grow dtc v-mid w-75 tr">
                    <Link to='/signin' className="link dim dark-gray f6 f5-ns dib" href="#" title="signout">Sign Out</Link>
                </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
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