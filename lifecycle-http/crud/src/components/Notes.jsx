import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../components/NoteItem';

export default function Notes(props) {
  const {notes, delNote} = props;

  return (
    notes.map(note => (
      <NoteItem key={note.id} note={note} removeNote={delNote} />
    ))
  );
}

Notes.propTypes = {
  notes: PropTypes.array,
  delNote: PropTypes.func
}