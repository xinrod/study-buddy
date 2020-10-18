import React from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import Reminder from './ReminderContainer.js';
import NotesContainer from './NotesContainer';
import {Grid, Row, Col} from "react-bootstrap";
import WritingNotes from './WritingNotes';
import CardContainer from './CardContainer';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


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
    
    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    }
    const handleClose = e => {
        setVisible(false);
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
                <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple" href="/WritingNotes">New Notes</a>
            </div>

            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Text Editor"
                visible={visible}
                onCancel={handleClose}
                width={2000}
                bodyStyle={{height: 500}}
            >
               <CKEditor                    
                editor={ ClassicEditor }
                data="<p>Notes Here! q=D</p>"
                onInit={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } } />
                
            </Modal>

            <CardContainer onDelete={onDelete} className="center" notes={filteredNotes}/>

        </>
    );
}

export default ClassDashboard;