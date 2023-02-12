import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

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

  function expand() {
    setExpanded(true);
  }

  function submitNote(event) {
    note.title || note.content ? onAdd(note) : expand();
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChnage}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          rows={isExpanded ? 3 : 1}
          placeholder="Take a note"
          onChange={handleChnage}
          value={note.content}
        />

        <Fab onClick={submitNote}>
          <Zoom
            in={isExpanded}
            style={{ transitionDelay: isExpanded ? '200ms' : '0ms' }}
          >
            <AddIcon />
          </Zoom>
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
