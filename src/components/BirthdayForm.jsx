// src/components/BirthdayForm.jsx
import React, { useState, useEffect } from 'react';

const BirthdayForm = ({ onAddBirthday, editingBirthday }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [relationship, setRelationship] = useState('');

    useEffect(() => {
        if (editingBirthday) {
            setName(editingBirthday.name);
            setDate(editingBirthday.date);
            setRelationship(editingBirthday.relationship);
        }
    }, [editingBirthday]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingBirthday) {
            onAddBirthday({ name, date, relationship });
            setName('');
            setDate('');
            setRelationship('');
        } else {
            onAddBirthday({ name, date, relationship });
            setName('');
            setDate('');
            setRelationship('');
        }
    };

    return (
        <div>
            <h2>{editingBirthday ? 'Edit Birthday' : 'Add Birthday'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <label>
                    Relationship:
                    <input type="text" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
                </label>
                <button type="submit">{editingBirthday ? 'Save Changes' : 'Add Birthday'}</button>
            </form>
        </div>
    );
};

export default BirthdayForm;
