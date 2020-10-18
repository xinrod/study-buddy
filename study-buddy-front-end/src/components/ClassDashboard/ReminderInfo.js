import React from 'react';
import { Card } from 'react-bootstrap';
import './Card.css';

const ReminderInfo = ({name, date}) => {

    return (
        <>
            <div>
                <Card className='grow' style={{ width: '18rem' }}>
                    <div class="pa2 ph3-ns pb3-ns reminder-box">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0">{name}</h1>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 mid-gray reminder-description">
                            {date}
                        </p>
                    </div>
                </Card>
            </div>

        </>
    );
}

export default ReminderInfo;