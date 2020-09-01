import React from 'react';
import {Link} from 'react-router-dom';
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
        {props.notes.map(note => <div><Link to={`/note/${note.id}`}>{note.name}</Link><br />{note.modified} <br />
          <button>Remove</button></div>)}
        
      </ul>
      <button>Add Note</button>
    </div>

  )
}
