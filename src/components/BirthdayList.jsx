// src/components/BirthdayList.jsx
import React from 'react';

const BirthdayList = ({ birthdays, onEditBirthday }) => {
    return (
        <div>
            <h2>Birthday List</h2>
            <ul>
                {birthdays.map((birthday) => (
                    <li key={birthday.id}>
                        {birthday.name}'s birthday on {birthday.date}.({birthday.relationship})
                        <button onClick={() => onEditBirthday(birthday)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BirthdayList;
