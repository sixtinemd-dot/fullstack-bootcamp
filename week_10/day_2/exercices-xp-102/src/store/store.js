import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// Create the Redux store
export const store = configureStore({
  reducer: {
    user: userReducer, // user slice will manage user-related state
  },
  // thunk middleware is already included by default
});
