import React, {Component} from 'react';
import {Route} from 'react-router-dom'; //Link
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NoteListNav from '../NoteListNav/NoteListNav';
// import NotePageNav from '../NotePageNav/NotePageNav';
// import NoteListMain from '../NoteListMain/NoteListMain';
import Note from '../Note/Note';
import NotePageMain from '../NotePageMain/NotePageMain';
import dummyStore from '../dummyStore';
// import {getNotesForFolder, findNote, findFolder} from '../notes-helpers';
import './App.css';

class App extends Component {
  state = {
      notes: [],
      folders: []
  };

  componentDidMount() {
      // fake date loading from API call
      setTimeout(() => this.setState(dummyStore), 600);
  }

  // renderNavRoutes() {
  //     const {notes, folders} = this.state;
  //     return (
  //         <>
  //             {['/', '/folder/:folderId'].map(path => (
  //                 <Route
  //                     exact
  //                     key={path}
  //                     path={path}
  //                     render={routeProps => (
  //                         <NoteListNav
  //                             folders={folders}
  //                             notes={notes}
  //                             {...routeProps}
  //                         />
  //                     )}
  //                 />
  //             ))}
  //             <Route
  //                 path="/note/:noteId"
  //                 render={routeProps => {
  //                     const {noteId} = routeProps.match.params;
  //                     const note = findNote(notes, noteId) || {};
  //                     const folder = findFolder(folders, note.folderId);
  //                     return <NotePageNav {...routeProps} folder={folder} />;
  //                 }}
  //             />
  //             <Route path="/add-folder" component={NotePageNav} />
  //             <Route path="/add-note" component={NotePageNav} />
  //         </>
  //     );
  // }

  // renderMainRoutes() {
  //     const {notes, folders} = this.state;
  //     return (
  //         <>
  //             {['/', '/folder/:folderId'].map(path => (
  //                 <Route
  //                     exact
  //                     key={path}
  //                     path={path}
  //                     render={routeProps => {
  //                         const {folderId} = routeProps.match.params;
  //                         const notesForFolder = getNotesForFolder(
  //                             notes,
  //                             folderId
  //                         );
  //                         return (
  //                             <NoteListMain
  //                                 {...routeProps}
  //                                 notes={notesForFolder}
  //                             />
  //                         );
  //                     }}
  //                 />
  //             ))}
  //             <Route
  //                 path="/note/:noteId"
  //                 render={routeProps => {
  //                     const {noteId} = routeProps.match.params;
  //                     const note = findNote(notes, noteId);
  //                     return <NotePageMain {...routeProps} note={note} />;
  //                 }}
  //             />
  //         </>
  //     );
  // }
  findById =(id) => {

    return this.state.notes.find(note => note.id === id)
    
  }

  render() {
      return (
          <div className="App">
              <nav className="App__nav"><Route path="/" render={() => <NoteListNav folders={this.state.folders} />} /></nav>
              <header className="App__header">
                  <h1>
                    Noteful
                      {/* <Link to="/">Noteful</Link>{' '}
                      <FontAwesomeIcon icon="check-double" /> */}
                  </h1>
              </header>
              <main className="App__main">
                <div>
                    <Route exact path="/" render={() => <NotePageMain notes={this.state.notes} />} />
                    <Route path="/note/:noteId" render={(routeProps) => <Note note={this.findById(routeProps.match.params.noteId)} />} />
                </div>
              </main>
          </div>
      );
  }
}


export default App;