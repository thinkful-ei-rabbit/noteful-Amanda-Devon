import React from 'react';

// import './NoteListNav.css';


export default function NotePageMain(props){
  return (
    <div>
      <ul>
        {props.folders.map(folder => <div>{folder.name}</div>)}
      </ul>
      <button>Add Folder</button>
    </div>
  )
}