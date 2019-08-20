import React from 'react';
import PropTypes from 'prop-types';

export default function NoteItem(props) {
  const {note, removeNote} = props;

  return (
    <div className='note-container'>
      <span 
        role='img' 
        aria-label='delete' 
        className='note-close' 
        onClick={() => removeNote(note.id)}
      >
        ❌
      </span>
      <div 
        className='note-content'>
          {note.content}
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object,
  removeNote: PropTypes.func
}