import React, { useEffect } from 'react';
import './Home.css';
import CardContainer from './CardContainer';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import Form from 'react-bootstrap/Form'


const Home = () => {
    const [visible, setVisible] = useState(false);
    const [currClass, setClass] = useState({
        name: '',
        id: '',
        description: '',
    });
    const [classes, addClass] = useState([]);

    useEffect(() => {
        console.log('render');
        console.log(JSON.stringify(currClass))
        fetch('http://localhost:8000/', {
            method: 'POST',
            body: JSON.stringify(currClass),
            headers: {
            'Content-Type': "application/json", 
            'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log('Created Gist:', data.html_url);
        });

        fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(data => {
            addClass(data);
            console.log(data);
        });

        console.log(classes)
    }, [currClass]);

    // useEffect(() => {
    //     setClass({
    //         name: '',
    //         id: '',
    //         description:'',
    //     })
    // },[classes]);

    const showModal = () => {
        setVisible(true);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setVisible(false);
        console.log(e.target);
        setClass({
            name: e.target.name.value,
            id: e.target.id.value,
            description: e.target.description.value
        });

    };

    const handleClose = e => {
        setVisible(false);
    }
    return (
        <>
            <h1>Your Classes</h1>
            <Button type='primary' onClick={showModal}>
                Create Class
            </Button>
            <Modal
                title="Create a Class"
                visible={visible}
                onCancel={handleClose}
                okButtonProps={{ form: 'classForm', key: 'submit', htmlType: 'submit' }}
            >
                <Form id="classForm" class="pa4 black-80" onSubmit={handleSubmit}>
                    <div class="measure">
                        <label for="name" class="f6 b db mb2">Name<span class="normal black-60"></span></label>
                        <input id='name' name='name' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div class="measure">
                        <label for="classid" class="f6 b db mb2">Class ID<span class="normal black-60"></span></label>
                        <input id="classid" name='id' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="classid" />
                    </div>
                    <div class="measure">
                        <label for="description" class="f6 b db mb2">Description<span class="normal black-60"></span></label>
                        <textarea id="description" name='description' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="classid" />
                    </div>
                </Form>


            </Modal>
            <CardContainer classes={classes} />
        </>
    );
}

export default Home;