import {
  SET_DAY,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from "./actions";

const initialState = {
  selectedDay: "2026-01-08",
  tasksByDay: {},
};

let nextId = 1;

export function plannerReducer(state = initialState, action) {

  if (action.type === SET_DAY) {
    return {
      ...state,
      selectedDay: action.payload,
    };
  }

  if (action.type === ADD_TASK) {
    const { day, text } = action.payload;
    const existingTasks = state.tasksByDay[day] || [];

    const newTask = {
      id: nextId,
      text,
    };

    nextId = nextId + 1;

    return {
      ...state,
      tasksByDay: {
        ...state.tasksByDay,
        [day]: existingTasks.concat(newTask),
      },
    };
  }

  if (action.type === EDIT_TASK) {
    const { day, id, text } = action.payload;

    const updatedTasks = state.tasksByDay[day].map((task) => {
      if (task.id === id) {
        return { ...task, text };
      }
      return task;
    });

    return {
      ...state,
      tasksByDay: {
        ...state.tasksByDay,
        [day]: updatedTasks,
      },
    };
  }

  if (action.type === DELETE_TASK) {
    const { day, id } = action.payload;

    const filteredTasks = state.tasksByDay[day].filter(
      (task) => task.id !== id
    );

    return {
      ...state,
      tasksByDay: {
        ...state.tasksByDay,
        [day]: filteredTasks,
      },
    };
  }

  return state;
}
