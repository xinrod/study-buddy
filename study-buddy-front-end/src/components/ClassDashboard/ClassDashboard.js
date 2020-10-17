import React from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import Reminder from './ReminderContainer.js'
import Container from 'react-bootstrap/Container';

const ClassDashboard = () => {

    return (
        <>  
        <div class='ClassTitle'>
            <Container fliud>
                <h3>The specific class Dashboard</h3>
            </Container>
        </div>
            <Reminder/>
        </>
    );
}

export default ClassDashboard;