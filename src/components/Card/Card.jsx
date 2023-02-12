import React from 'react';
import { Delete } from '@mui/icons-material';

function Card({ title, id, content, onDelete }) {
  function handleClick() {
    onDelete(id);
  }
  return (
    <div className="note">
      <strong>{title}</strong>
      <p>{content}</p>
      <button onClick={handleClick}>
        <Delete />
      </button>
    </div>
  );
}

export default Card;
