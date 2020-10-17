import React from 'react';
import './Home.css';
import ClassCard from './ClassCard';
import {Link} from 'react-router-dom';

const CardContainer = ({classes}) => {
    const classComponent = classes.map((user, i) => {
        return (
        <ClassCard 
            name={classes[i].name}
            id={classes[i].id}
            description={classes[i].description}
        />
        )
    });
    return (
        <>
            {classComponent}
        </>
    );
}

export default CardContainer;