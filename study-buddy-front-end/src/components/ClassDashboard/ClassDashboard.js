import React from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import ReminderContainer from './ReminderContainer.js';
import NotesContainer from './NotesContainer';
import {Grid, Row, Col} from "react-bootstrap";
import WritingNotes from './WritingNotes';


const ClassDashboard = ({name, id}) => {
    
    return (
        <>  
            <div>
            <h1 className="tc">{name}</h1>
            <ReminderContainer id={id}/>
            <hr className="my-4"></hr>
            </div>

            <div className="ph5 pv3">
                <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple" href="ClassDashboard/new">Button Text</a>
            </div>

            <NotesContainer/>
        </>
    );
}

export default ClassDashboard;