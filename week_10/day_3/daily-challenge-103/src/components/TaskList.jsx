import { useSelector, useDispatch } from "react-redux";
import { selectTasksByCategory } from "../redux/selectors";
import { toggleTaskCompletion, deleteTask } from "../redux/tasksSlice";
import { useCallback } from "react";

function TaskList() {
  const tasks = useSelector(selectTasksByCategory);
  const dispatch = useDispatch();

  // 1. useCallback for efficient re-renders
  const handleToggle = useCallback(
    (id) => dispatch(toggleTaskCompletion(id)),
    [dispatch]
  );

  const handleDelete = useCallback(
    (id) => dispatch(deleteTask(id)),
    [dispatch]
  );

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => handleToggle(task.id)}
            style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
          >
            {task.text}
          </span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
