import './App.css';
import Header from './components/Header/Header';
import CreateArea from './components/CreateArea/CreateArea';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      console.log(prevNotes);
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  );
}

export default App;
