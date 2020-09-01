import React from 'react';

import './NoteListNav.css';

export default function NoteListNav (props){
  return (
    <div>
      <a href='#Folder1'>Folder1</a><br />
      <a href='#Folder2'>Folder2</a><br />
      <a href='#Folder3'>Folder3</a><br />
      <button>Add New Folder</button>
    </div>
  )
}