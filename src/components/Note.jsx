import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </button>
    </div>
  );
}

export default Note;
