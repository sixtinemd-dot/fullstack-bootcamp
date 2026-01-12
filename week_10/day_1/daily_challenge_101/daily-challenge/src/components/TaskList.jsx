import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const { selectedDate, tasksByDate } = useSelector(
    (state) => state.planner
  );

  const tasks = tasksByDate[selectedDate] || [];

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
