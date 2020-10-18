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
import Form from 'react-bootstrap/Form';


const ClassDashboard = () => {

    async function handleSubmit(e) {
        // e.preventDefault();
        // setVisible(false);
        // console.log(e.target);
        // setClass({
        //     name: e.target.name.value,
        //     id: e.target.id.value,
        //     description: e.target.description.value
        // });

    };

    const onDelete = (e) => {

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
             
            <div class='pa2 ph4'>
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

                <Form id="notesForm" class="pa4 black-80" onOk={handleSubmit}>
                    <div class="measure">
                        <label for="title" class="f6 b db mb2">Title<span class="normal black-60"></span></label>
                        <input id='title' name='title' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                </Form>
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
            </div>

            <CardContainer onDelete={onDelete} className="center" notes={filteredNotes}/>

        </>
    );
}

export default ClassDashboard;