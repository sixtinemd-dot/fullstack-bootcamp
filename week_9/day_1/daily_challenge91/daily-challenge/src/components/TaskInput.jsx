import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskInput() {
  const { dispatch } = useContext(TaskContext);
  const inputRef = useRef(null);

  const addTask = () => {
    if (!inputRef.current.value.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: inputRef.current.value,
    });

    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Add a task" />
      <button onClick={addTask}>Add</button>
    </div>
  );
}
