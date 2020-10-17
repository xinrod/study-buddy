import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {

    return (
        <>
            <nav className="dt w-100 border-box pa3 ph5-ns">
                <Link path='/' className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="Home">
                    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
                    Buddy Study
                </Link>
                <div className="dtc v-mid w-75 tr">
                    <a className="link dim dark-gray f6 f5-ns dib" href="#" title="signout">Sign Out</a>
                </div>
            </nav>
            <h1>Dashboard</h1>
            
        </>
    );
}

export default Home;