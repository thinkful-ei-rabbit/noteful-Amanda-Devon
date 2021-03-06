// import React from 'react';


// export default function Note (props){
//   console.log(props) 
//   return (
 
//   <div>
//     <title>{props.note.name}</title>
//     <span>{props.note.modified}</span>
//     <p>{props.note.content}</p>
//     <button>Remove</button>
//   </div>
     
    
//   )
// }
import React from 'react';

export default function Note (props){ 
  const result = !props.note ? ( 'loading' ) : ( 
  <div> 
    <title>{props.note.name}</title> 
    <span>{props.note.modified}</span> 
    <p>{props.note.content}</p> 
  </div> );

return ( <div> {result} </div> ) }
