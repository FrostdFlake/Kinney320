import React, { useState } from 'react';
import './App.css';
import BirthdayList from './components/BirthdayList';
import BirthdayForm from './components/BirthdayForm';

function App() {
  const [birthdays, setBirthdays] = useState([]);
  const [editingBirthday, setEditingBirthday] = useState(null);

  const addBirthday = (newBirthday) => {
    setBirthdays([...birthdays, { ...newBirthday, id: birthdays.length + 1 }]);
  };

  const editBirthday = (birthday) => {
    setEditingBirthday(birthday);
  };

  const saveChanges = (editedBirthday) => {
    setBirthdays((prevBirthdays) =>
      prevBirthdays.map((b) => (b.id === editedBirthday.id ? editedBirthday : b))
    );
    setEditingBirthday(null);
  };

  return (
    <div className="App">
      <h1>Birthday Tracker App</h1>
      <BirthdayForm onAddBirthday={addBirthday} editingBirthday={editingBirthday} saveChanges={saveChanges} />
      <BirthdayList birthdays={birthdays} onEditBirthday={editBirthday} />
    </div>
  );
}

export default App;