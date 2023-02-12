import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChnage(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChnage}
          value={note.title}
        />
        <textarea
          name="content"
          rows="3"
          placeholder="Take a note"
          onChange={handleChnage}
          value={note.content}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
