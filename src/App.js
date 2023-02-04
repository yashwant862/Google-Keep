import React from 'react';
import MyDrawer from './components/MyDrawer';

import React, { useState } from 'react';
import './styles.css';

import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count';
import Setting from './components/Setting';

import { BrowserRouter as router, Switch, Route, Link } from 'react-route-dom';

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <MyDrawer />
      <Count
        count={
          notes.length === 0 ? 'Create Note' : `Showing ${notes.length} Notes `
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}

    </div>
  );
}

export default App;
