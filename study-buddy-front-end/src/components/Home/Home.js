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
        "name": 'defaultClass',
        "id": 'CLA101',
        "description": 'test class',
    });
    const [classes, addClass] = useState([]);

    useEffect(() => {
        console.log('render');
        console.log(currClass)
        addClass(classes.concat(currClass))
        console.log(classes)
    }, [currClass]);

    const showModal = () => {
        setVisible(true);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setVisible(false);
        console.log(e.target);
        setClass({
            name: e.target.name.value,
            id: e.target.classid.value,
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
                okButtonProps={{form:'classForm', key: 'submit', htmlType: 'submit'}}
            >
                <Form id="classForm" class="pa4 black-80" onSubmit={handleSubmit}>
                    <div class="measure">
                        <label for="name" class="f6 b db mb2">Name<span class="normal black-60"></span></label>
                        <input id='name' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div class="measure">
                        <label for="classid" class="f6 b db mb2">Class ID<span class="normal black-60"></span></label>
                        <input id="classid" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="classid" />
                    </div>
                    <div class="measure">
                        <label for="description" class="f6 b db mb2">Description<span class="normal black-60"></span></label>
                        <textarea id="description" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="classid" />
                    </div>
                </Form>


            </Modal>
            <CardContainer classes={classes}/>
        </>
    );
}

export default Home;