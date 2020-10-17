import React from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReminderContainer = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col md={{span:8}}>
                        <Jumbotron>
                            <h2>Reminders!</h2>
                            <hr class="my-4"></hr>
                            <ol>
                                <li>CMPS has a quiz on Wednesday October 21st at 12:00pm!</li>
                                <li>CMPS 101 has a test on Wednesday October 28th at 12:00pm!</li>
                            </ol>
                        </Jumbotron>  
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ReminderContainer;