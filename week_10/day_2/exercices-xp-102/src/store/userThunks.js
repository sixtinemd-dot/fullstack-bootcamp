import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} from "./userSlice";

// Thunk action creator
export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserStart()); // start loading

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const data = await response.json();

    dispatch(fetchUserSuccess(data)); // success
  } catch (error) {
    dispatch(fetchUserFailure(error.message)); // failure
  }
};
