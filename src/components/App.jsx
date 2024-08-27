import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    1;
  }

  function deleteNote(deleteIndex) {
    setNotes(
      notes.filter((item, itemIndex) => {
        return deleteIndex != itemIndex;
      })
    );
  }

  function mapNotes(noteItem, index) {
    return (
      <Note
        key={uuidv4()}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <InputArea add={addNote} />
      {notes.map(mapNotes)}
      <Footer />
    </div>
  );
}

export default App;
