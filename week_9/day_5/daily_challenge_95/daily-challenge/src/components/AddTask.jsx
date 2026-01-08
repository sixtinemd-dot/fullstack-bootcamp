import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

function AddTask({ selectedDay, addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTask(selectedDay, text);
      setText("");
    }
  };

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedDay: state.selectedDay,
  };
};

export default connect(mapStateToProps, { addTask })(AddTask);
