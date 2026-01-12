import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask, deleteTask } from "../redux/plannerSlice";

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state) => state.planner.selectedDate
  );

  return (
    <li>
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() => {
              dispatch(editTask({ date: selectedDate, id: task.id, text }));
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button
        onClick={() =>
          dispatch(deleteTask({ date: selectedDate, id: task.id }))
        }
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
