import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Card.css';
import {Link} from 'react-router-dom';

const ClassCard = ({title, description, onDelete}) => {
    return (
        <>
            {/* <Link to={id} className='nostyle' style={{color: 'inherit'}}></Link> */}
            <Card className='card br3 ba pa3 ma2 grow bw2 shadow5 nostyle' style={{ width: '18rem', height: '18rem' }}>
                            <div id='title'>{title}</div>
                    <p class="f6 lh-copy measure mid-gray">
                        {description}
                    </p>
                
                <nav style={{display: "inline"}} className='d-flex mt-auto align-self-end dt buttons'>
                    <Button onClick={onDelete} forDeleteName={title} className='btn-sm di grow delete'>Delete</Button>
                </nav>
            </Card>


        </>
    );
}

export default ClassCard;