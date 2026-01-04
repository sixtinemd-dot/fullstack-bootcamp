import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { state, dispatch } = useContext(TaskContext);
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "all" })}>
          All
        </button>
        <button
          onClick={() =>
            dispatch({ type: "FILTER_TASKS", payload: "active" })
          }
        >
          Active
        </button>
        <button
          onClick={() =>
            dispatch({ type: "FILTER_TASKS", payload: "completed" })
          }
        >
          Completed
        </button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
