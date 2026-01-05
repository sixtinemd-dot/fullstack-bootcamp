import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <p>Add, edit, and filter tasks</p>

      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;

