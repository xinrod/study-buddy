import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Card.css';


const ClassCard = ({name, id, description, onDelete}) => {
    return (
        <>
            <Card className='dib br3 ba pa3 ma2 grow bw2 shadow5 nostyle' style={{ width: '18rem', height: '18rem' }}>
                            <div id='name'>{name}</div>
                    <p class="f6 lh-copy measure mid-gray">
                        {description}
                    </p>
                
                <nav style={{display: "inline"}} className='d-flex mt-auto align-self-end dt buttons'>
                    <Button onClick={onDelete} forDeleteName={name} forDeleteID={id} className='btn-sm di grow delete'>Delete</Button>
                </nav>
            </Card>


        </>
    );
}

export default ClassCard;