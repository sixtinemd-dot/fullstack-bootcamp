import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { selectSelectedCategoryId } from "../redux/selectors";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selectedCategoryId = useSelector(selectSelectedCategoryId);

  const handleAdd = () => {
    if (!text.trim()) return; // prevent empty tasks
    if (!selectedCategoryId) {
      alert("Please select a category first");
      return;
    }
    dispatch(
      addTask({
        id: Date.now(),
        text,
        categoryId: selectedCategoryId,
        completed: false,
      })
    );
    setText(""); // clear input after adding
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default AddTask;
