import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

import Form from 'react-bootstrap/Form';


const Home = () => {
    const [visible, setVisible] = useState(false);
    const [currProfile, setProfile] = useState({
        fullname: '',
        school: '',
        email: '',
    });


    const showModal = () => {
        setVisible(true);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setVisible(false);
        console.log(e.target);
        setProfile({
            fullname: e.target.fullname.value,
            school: e.target.school.value,
            email: e.target.email.value
        });

    };

    const handleClose = e => {
        setVisible(false);
    }
    return (
        <>
            <Button type='primary' onClick={showModal}>
                Profile
            </Button>
            <Modal
                title="Your Profile"
                visible={visible}
                onCancel={handleClose}
                okButtonProps={{ form: 'classForm', key: 'submit', htmlType: 'submit' }}

            >
{/* I did not change the labels/names in the html tags since there is not a CSS linked yet */ }
                <Form id="classForm" class="pa4 black-80" onSubmit={handleSubmit}>
                    <div class="measure">
                        <label for="name" class="f6 b db mb2">Full Name<span class="normal black-60"></span></label>
                        <input id='name' name='name' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div class="measure">
                        <label for="classid" class="f6 b db mb2">School<span class="normal black-60"></span></label>
                        <input id="classid" name='id' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="classid" />
                    </div>
                    <div class="measure">
                        <label for="description" class="f6 b db mb2">E-Mail<span class="normal black-60"></span></label>
                        <textarea id="description" name='description' class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="classid" />
                    </div>
                </Form>

            </Modal>


        </>
    );
}

export default Home;