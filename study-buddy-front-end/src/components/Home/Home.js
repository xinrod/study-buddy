import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import CardContainer from './CardContainer';

const Home = () => {

    return (
        <>
            <h1>Dashboard</h1>
            <CardContainer/>
        </>
    );
}

export default Home;