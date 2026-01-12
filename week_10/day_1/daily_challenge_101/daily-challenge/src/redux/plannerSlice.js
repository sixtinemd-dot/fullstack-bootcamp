import { createSlice } from "@reduxjs/toolkit";

// 1. Initial state
const initialState = {
  tasksByDate: {},
  selectedDate: new Date().toISOString().split("T")[0],
};

// 2. Create slice
const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    // 3. Select day
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },

    // 4. Add task
    addTask: (state, action) => {
      const { date, text } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({
        id: Date.now(),
        text,
      });
    },

    // 5. Edit task
    editTask: (state, action) => {
      const { date, id, text } = action.payload;
      const task = state.tasksByDate[date]?.find(t => t.id === id);
      if (task) {
        task.text = text;
      }
    },

    // 6. Delete task
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date]?.filter(
        task => task.id !== id
      );
    },
  },
});

export const {
  setSelectedDate,
  addTask,
  editTask,
  deleteTask,
} = plannerSlice.actions;

export default plannerSlice.reducer;
