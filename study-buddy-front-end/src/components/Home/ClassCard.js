import React from 'react';
import { Card } from 'react-bootstrap';
import './Card.css';

const ClassCard = ({name, id, description}) => {

    return (
        <>
            <Card className='grow' style={{ width: '18rem' }}>
                <div class="pa2 ph3-ns pb3-ns">
                    <div class="dt w-100 mt1">
                        <div class="dtc">
                            <h1 class="f5 f4-ns mv0">{name}</h1>
                        </div>
                    </div>
                    <p class="f6 lh-copy measure mt2 mid-gray">
                        {description}
    </p>
                </div>
                <nav className='dt buttons'>
                    <div className=' grow delete'>delete</div>
                    <div className=' grow nav'>nav</div>
                </nav>
            </Card>


        </>
    );
}

export default ClassCard;