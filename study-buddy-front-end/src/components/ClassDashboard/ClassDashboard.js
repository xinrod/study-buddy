import React from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import Reminder from './ReminderContainer.js';
import NotesContainer from './NotesContainer';
import {Grid, Row, Col} from "react-bootstrap";
import WritingNotes from './WritingNotes';


const ClassDashboard = () => {
    
    return (
        <>  
            <div>
            <h1 class="tc">The specific class Dashboard</h1>
            <Reminder/>
            <hr class="my-4"></hr>
            </div>

            <div class="ph5 pv3">
                <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple" href="ClassDashboard/new">Button Text</a>
            </div>

            <NotesContainer/>
        </>
    );
}

export default ClassDashboard;