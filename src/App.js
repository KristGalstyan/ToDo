import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import CreateArea from './components/CreateArea/CreateArea';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function onDelete(id) {
    setNotes((prevNote) => {
      return prevNote.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((elm, i) => {
        const { title, content } = elm;
        return (
          <Card
            title={title}
            key={i}
            onDelete={onDelete}
            id={i}
            content={content}
          />
        );
      })}
    </div>
  );
}

export default App;
