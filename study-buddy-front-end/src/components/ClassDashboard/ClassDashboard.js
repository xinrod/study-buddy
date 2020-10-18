import React from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import ReminderContainer from './ReminderContainer.js';
import {Grid, Row, Col} from "react-bootstrap";
import WritingNotes from './WritingNotes';
import CardContainer from './CardContainer';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';


const ClassDashboard = ({name,id}) => {

    const onDelete = (e) => {

    }
    
    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    }
    const handleClose = e => {
        setVisible(false);
    }

    const [notes, addNote] = useState([]);

    const [searchField, updateSearch] = useState('');
    const [data, setData] = useState();

    const filteredNotes = notes.filter(classC => {
        return classC.name.toLowerCase().includes(searchField.toLowerCase());
    });
    const idClass = id;

    const handleSubmit = e => {
        console.log(data);
        axios(`http://localhost:8000/addNotes`, {
            method: "POST",
            data: {
                id: idClass,
                content: data,
            },
        })
        .then(response => {
            if (response.data) {
                console.log(`success!, added a notes.`)
            }
        });

        axios(`http://localhost:8000/getNotes?id=${idClass}`)
        .then(response => {
            if (response.data) {
                console.log(`success!, updated notes`, response.data)
            }
        });

    }
    return (
        <>  
            <div>
            <h1 className="tc">{name}</h1>
            <ReminderContainer id={id}/>
            <hr className="my-4"></hr>
            </div>
             
            <div class='pa2 ph4'>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Text Editor"
                visible={visible}
                onCancel={handleClose}
                onOk={handleSubmit}
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
                    const dataTemp = editor.getData();
                    setData(dataTemp);
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