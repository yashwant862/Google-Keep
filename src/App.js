import React from 'react';
import MyDrawer from './components/MyDrawer';

import React, { useState } from 'react';
import './styles.css';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Notes from './Pages/Notes';
import Reminder from './Pages/Reminder';
import Label from './Pages/Label';
import Archive from './Pages/Archive';
import Trash from './Pages/Trash';
import Setting from './Pages/Setting';
import Help from './Pages/Help';

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
      {/* <>
        <BrowserRouter>
          <Routes>
            <Route path="/Notes" element={<Notes />}></Route>
            <Route path="/Reminder" element={<Reminder />}></Route>
            <Route path="/Label" element={<Label />}></Route>
            <Route path="/Archive" element={<Archive />}></Route>
            <Route path="/Trash" element={<Trash />}></Route>
            <Route path="/Setting" element={<Setting />}></Route>
            <Route path="/Help" element={<Help />}></Route>
          </Routes>
        </BrowserRouter>
      </> */}
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
