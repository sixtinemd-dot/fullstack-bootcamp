import CategorySelector from "./components/CategorySelector";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Productivity Tracker</h1>
      <CategorySelector />
      <AddTask />     {/* <-- new component */}
      <TaskList />
    </div>
  );
}

export default App;

