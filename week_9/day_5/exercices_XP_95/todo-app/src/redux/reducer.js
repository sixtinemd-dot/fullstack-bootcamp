// store/reducer.js
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

// Initial state of the app
const initialState = {
  todos: [],
};

// Simple id counter (easy to understand)
let nextId = 1;

export function todoReducer(state = initialState, action) {
  // ADD TODO
  if (action.type === ADD_TODO) {
    const newTodo = {
      id: nextId,
      text: action.payload,
      completed: false,
    };

    nextId = nextId + 1;

    return {
      ...state,
      todos: state.todos.concat(newTodo),
    };
  }

  // TOGGLE TODO
  if (action.type === TOGGLE_TODO) {
    const updatedTodos = state.todos.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    return {
      ...state,
      todos: updatedTodos,
    };
  }

  // REMOVE TODO
  if (action.type === REMOVE_TODO) {
    const filteredTodos = state.todos.filter((todo) => {
      return todo.id !== action.payload;
    });

    return {
      ...state,
      todos: filteredTodos,
    };
  }

  // If action is unknown, return the current state
  return state;
}
