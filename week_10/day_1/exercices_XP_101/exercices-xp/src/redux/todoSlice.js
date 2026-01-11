import { createSlice } from "@reduxjs/toolkit";

//Define initial state
const initialState = {
  todos: [],
};

//Create todo slice
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Add todo
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    //Toggle todo completion
    toggleTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    //Remove todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

//Export actions
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
