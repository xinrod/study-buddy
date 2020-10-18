import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Card.css';
import {Link} from 'react-router-dom';

const ClassCard = ({title, author, id, votenumber, onDelete, onUpvote, onDownvote}) => {
    return (
        <>
            <Card className='card br3 ba pa3 ma2 bw2 shadow5 nostyle' style={{ width: '18rem', height: '18rem' }}>
            <Link to={`/author=${author}/title=${title}`} className='nostyle grow' style={{color: 'inherit'}}>

                            <div>{title}</div>
                    <p class="f6 lh-copy measure mid-gray">
                        Author: {author}
                    </p>
            </Link> 

                
                <div class="upvote-button">
                    <Button onClick={onUpvote} titleforrequest={`${title}`} authorforrequest={`${author}`} votenumber={votenumber} className="grow">^</Button>
                </div>
                <div class="downvote-button">
                    <Button onClick={onDownvote}  titleforrequest={`${title}`} authorforrequest={`${author}`} votenumber={votenumber} className="grow">v</Button>
                </div>

                <nav style={{display: "inline"}} className='d-flex mt-auto align-self-end dt buttons'>
                    <Button onClick={onDelete}  titleforrequest={`${title}`} authorforrequest={`${author}`} className='btn-sm di grow delete'>Delete</Button>
                </nav>
            </Card>


        </>
    );
}

export default ClassCard;