import React from "react";

function CreateArea() {
  return (
    <div className="input-box">
      <form>
        <input name="title" placeholder="Title" />
        <br />
        <textarea name="content" placeholder="Take a note..." rows="5" />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
