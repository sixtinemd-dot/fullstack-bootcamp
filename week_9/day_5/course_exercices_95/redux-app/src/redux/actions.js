export const ACTION_INCREMENT = "increment";
export const ACTION_DECREMENT = "decrement";
export const ACTION_INPUT = "byinput";

export const increment = () => {
  return {
    type: ACTION_INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: ACTION_DECREMENT,
  };
};

export const byInputVal = (val) => {
  return {
    type: ACTION_INPUT,
    payload: val,
  };
};