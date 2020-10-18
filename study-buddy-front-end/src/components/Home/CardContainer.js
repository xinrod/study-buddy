import React from 'react';
import './Home.css';
import ClassCard from './ClassCard';
import { Link } from 'react-router-dom';

const CardContainer = ({ classes, onDelete}) => {
    const classComponent = classes.map((user, i) => {
        return (
            <ClassCard
                name={classes[i].name}
                id={classes[i].id}
                description={classes[i].description}
                onDelete={onDelete}
            />
        )
    });
    return (
        <>
            <section class="mw10 mw7-ns pa1 ph1-ns">
                {classComponent}
            </section>
        </>
    );
}

export default CardContainer;