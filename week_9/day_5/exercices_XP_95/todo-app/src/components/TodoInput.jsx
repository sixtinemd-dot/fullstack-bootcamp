import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default connect(null, { addTodo })(TodoInput);
