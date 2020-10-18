import React from 'react';
import './ClassDashboard.css';
import ClassCard from './ClassCard';
import { Link } from 'react-router-dom';

const CardContainer = ({ notes, onDelete}) => {
    const classComponent = notes.map((user, i) => {
        return (
            <ClassCard
                title={notes[i].name}
                description={notes[i].description}
                onDelete={onDelete}
            />
        )
    });
    return (
        <>
            {/* <section class="classcontainer mw10 mw7-ns pa1 ph1-ns"> */}
                {classComponent}
            {/* </section> */}
        </>
    );
}

export default CardContainer;