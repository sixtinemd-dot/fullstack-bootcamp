import { connect } from "react-redux";
import { deleteTask } from "../redux/actions";

function TaskList({ tasks, selectedDay, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => deleteTask(selectedDay, task.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedDay: state.selectedDay,
    tasks: state.tasksByDay[state.selectedDay] || [],
  };
};

export default connect(mapStateToProps, { deleteTask })(TaskList);
