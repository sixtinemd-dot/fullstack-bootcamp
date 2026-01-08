// Action types
export const SET_DAY = "SET_DAY";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

// Action creators
export const setDay = (day) => {
  return {
    type: SET_DAY,
    payload: day,
  };
};

export const addTask = (day, text) => {
  return {
    type: ADD_TASK,
    payload: { day, text },
  };
};

export const editTask = (day, id, text) => {
  return {
    type: EDIT_TASK,
    payload: { day, id, text },
  };
};

export const deleteTask = (day, id) => {
  return {
    type: DELETE_TASK,
    payload: { day, id },
  };
};
