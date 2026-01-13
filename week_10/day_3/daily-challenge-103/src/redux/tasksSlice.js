import { createSlice } from "@reduxjs/toolkit";

// 1. Initial state for tasks
// Each task has: id, text, categoryId, completed
const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // 2. Add task
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    // 3. Edit task
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.text = text;
    },
    // 4. Delete task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    // 5. Toggle task completion
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
