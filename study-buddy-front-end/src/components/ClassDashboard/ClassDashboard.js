import React from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import Reminder from './ReminderContainer.js'
import Container from 'react-bootstrap/Container';

const ClassDashboard = () => {

    return (
        <>  
            <Container fliud>
                <h1 class="tc">The specific class Dashboard</h1>
            </Container>
            <Reminder/>
        </>
    );
}

export default ClassDashboard;