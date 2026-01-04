import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
