import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function InputArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    note.title && note.content && props.add(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note"
          value={note.content}
          onClick={expand}
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
