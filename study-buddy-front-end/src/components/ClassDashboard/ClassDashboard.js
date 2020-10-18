import React from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import Reminder from './ReminderContainer.js';
import NotesContainer from './NotesContainer';
import {Grid, Row, Col} from "react-bootstrap";
import WritingNotes from './WritingNotes';
import CardContainer from './CardContainer';
import { useState } from 'react';


const ClassDashboard = () => {

    const onDelete = (e) => {
        // const n = (e.target.getAttribute('forDeleteName'));
        // const i = (e.target.getAttribute('forDeleteID'));

        // console.log(JSON.stringify({
        //     name : n,
        //     id : i,
        //     description: ""
        // }))
        // fetch('http://localhost:8000/', {
        //     method: 'DELETE',
        //     body: JSON.stringify({
        //         name : n,
        //         id : i,
        //         description: ""
        //     }),
        //     headers: {
        //     'Content-Type': "application/json", 
        //     'Access-Control-Allow-Origin': 'http://localhost:3000'
        //     },
        // }).then(function (response) {
        //     return response.json();
        // }).then(function (data) {
        // });
    }

    const [notes, addClass] = useState([]);

    const [searchField, updateSearch] = useState('');

    const filteredNotes = notes.filter(classC => {
        return classC.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
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

            <CardContainer onDelete={onDelete} className="center" notes={filteredNotes}/>
        </>
    );
}

export default ClassDashboard;