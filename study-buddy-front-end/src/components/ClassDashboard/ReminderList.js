import React from 'react';
import './ClassDashboard.css';
import ReminderInfo from './ReminderInfo';
import {Link} from 'react-router-dom';

const ReminderList = ({reminders}) => {
    const reminderComponent = reminders.map((user, i) => {
        return (
        <ReminderInfo 
            title={reminders[i].title}
            description={reminders[i].description}
        />
        )
    });
    return (
        <>
            {reminderComponent}
        </>
    );
}

export default ReminderList;