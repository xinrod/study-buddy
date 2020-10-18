import React, { useState } from 'react';

import './App.css';
import Home from './components/Home/Home';
import 'tachyons';


import Profile from './components/Home/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn/SignIn';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {

  const [userName, setUsername] = useState('');

  const handleSubmit = (e) => {
    setUsername(e.target.username.value);
    // history.push("/");
  };

  return (
    <Router>      
      <nav className="dt w-100 border-box pa3 ph5-ns">
                <Link to='/' className="grow link dim black f1 f4-ns dib mr3 mr4-ns" title="Home">
                    Buddy Study 
                </Link>
                <Link to='/' className="grow link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="Home">
                    Home
                </Link>
                <Profile username={userName} className="link dim dark-gray f6 f5-ns dib"/>
                {userName === '' ? 
                <div className="grow dtc v-mid w-75 tr">
                    <Link to='/signin' className="link dim dark-gray f6 f5-ns dib" href="#" title="signout">Sign In</Link>
                </div>
                :
                <div className="grow dtc v-mid w-75 tr">
                    <Link to='/signin' className="link dim dark-gray f6 f5-ns dib" href="#" title="signout">Sign Out</Link>
                </div>
              }
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signin">
          <SignIn handleSubmit={handleSubmit}/>
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