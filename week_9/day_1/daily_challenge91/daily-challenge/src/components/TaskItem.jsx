import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  const saveEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: task.id, text: inputRef.current.value },
    });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input ref={inputRef} defaultValue={task.text} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() =>
              dispatch({ type: "TOGGLE_TASK", payload: task.id })
            }
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
}
