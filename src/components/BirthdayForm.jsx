// src/components/BirthdayForm.js
import React, { useState, useEffect } from 'react';

const BirthdayForm = ({ onAddBirthday, editingBirthday }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (editingBirthday) {
            setName(editingBirthday.name);
            setDate(editingBirthday.date);
        }
    }, [editingBirthday]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingBirthday) {
            // Editing existing birthday
            // You can implement the logic to update the birthday in the state
            // For simplicity, we're just clearing the editing state here
            onAddBirthday({ name, date });
            setName('');
            setDate('');
        } else {
            // Adding new birthday
            onAddBirthday({ name, date });
            setName('');
            setDate('');
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
