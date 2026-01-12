import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/plannerSlice";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state) => state.planner.selectedDate
  );

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask({ date: selectedDate, text }));
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

export default AddTask;
