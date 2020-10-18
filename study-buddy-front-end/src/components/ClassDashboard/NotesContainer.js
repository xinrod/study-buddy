import React from 'react';
import './ClassDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from "react-bootstrap";

const NotesContainer = () => {
    
    const company_list = [
        { "name": "Nasa"},
        { "name": "Microsoft"},
        { "name": "Phillips"},
        { "name": "Fox"},
        { "name": "Sony"},
        { "name": "IBM"},
        { "name": "Toshiba"},
        { "name": "Volvo"}
    ]

    return (
        <> 
            <Row gutter={40}>
                {company_list.map(co =>
                    <Col 
                    xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
                    lg={{ span: 2 }} xl={{ span: 1 }}
                    ><div>{co.name}</div></Col>
                )}
            </Row>
        </>
    );
}

export default NotesContainer;