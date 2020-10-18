import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';


const Home = () => {
    const [visible, setVisible] = useState(false);
    


    const showModal = () => {
        setVisible(true);
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
            >
            </Modal>


        </>
    );
}

export default Home;