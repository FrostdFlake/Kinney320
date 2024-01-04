// src/App.js
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

  return (
    <div className="App">
      <h1>Birthday Tracker App</h1>
      <BirthdayForm onAddBirthday={addBirthday} />
      <BirthdayList birthdays={birthdays} onEditBirthday={editBirthday} />
    </div>
  );
}

export default App;
