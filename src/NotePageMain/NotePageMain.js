import React from 'react';

// import './NotePageMain.css';
// import Note from '../Note/Note'
// import NoteForm from './NoteForm'

//populate with notes

//noteForm

//buttons to add note

export default function NoteListNav (props){
  return (
    <div>
      <ul>
        {props.notes.map(note => <div>{note.name}<br />{note.modified}
          <button>Remove</button></div>)}
      </ul>
      <button>Add Note</button>
    </div>

  )
}
