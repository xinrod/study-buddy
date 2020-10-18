import React, { useEffect } from 'react';
import './ClassDashboard.css';
import {Link} from 'react-router-dom';
import { Modal, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import Form from 'react-bootstrap/Form';
import ReminderList from './ReminderList.js';

const ReminderContainer = () => {

    const [visible, setVisible] = useState(false);
    const [currReminder, setReminder] = useState({
        title : "Midterm",
        description : "Wednesday October 25th, there is a midterm at 12:00pm for CS101 class."
    });
    const [reminders, addReminder] = useState([]);

    useEffect(() => {
        console.log('render')
        console.log(currReminder)
        addReminder(reminders.concat(currReminder))
        console.log(reminders)
    }, [currReminder]);

    const showForm = () => {
        setVisible(true);
    }

    const handleClose = e => {
        setVisible(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setVisible(false);
        console.log(e.target);
        setReminder({
            title: e.target.title.value,
            description: e.target.description.value
        });
    };

    return (
        <>  
            <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <h2>Reminders!</h2>
                <Button type='primary' onClick={showForm}>
                    Create Reminder
                </Button>
                <Modal
                title="Create a Reminder"
                visible={visible}
                onCancel={handleClose}
                okButtonProps={{form:'reminderForm', key: 'submit', htmlType: 'submit'}}
                >
                    <Form id="reminderForm" class="pa4 pv2 black-80" onSubmit={handleSubmit}>
                        <div class="measure">
                            <label for="title" class="f6 b db mb2">Title<span class="normal black-60"></span></label>
                            <input id='title' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="title-desc" />
                        </div>
                    </Form>
                </Modal>

                <ReminderList reminders={reminders}></ReminderList>
            </section>
        </>
    );
}

export default ReminderContainer;