import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

import Form from 'react-bootstrap/Form';


const Home = ({ username }) => {

    const name = username === '' ? "Please Sign In" : username;
    const [visible, setVisible] = useState(false);


    const showModal = () => {
        setVisible(true);
        console.log(username);
    }


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
                onOk={handleClose}
            >
                {/* I did not change the labels/names in the html tags since there is not a CSS linked yet */}
                <div class="pa4 black-80" >
                    <div class="measure">
                        <label for="name" class="f6 b db mb2">Username<span class="normal black-60"></span></label>
                        <p class=" b--black-20 pa2 mb2 db w-100">{name}</p>
                    </div>
                    <div class="measure">
                        <label for="name" class="f6 b db mb2">School<span class="normal black-60"></span></label>
                        <p class=" b--black-20 pa2 mb2 db w-100">University of North Carolina at Chapel Hill</p>
                    </div>
                    
                </div>

            </Modal>


        </>
    );
}

export default Home;