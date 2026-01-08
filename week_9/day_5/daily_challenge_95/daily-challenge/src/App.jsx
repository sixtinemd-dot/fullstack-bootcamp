import DayPicker from "./components/DayPicker";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Daily Planner</h1>
      <DayPicker />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
