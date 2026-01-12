import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // Explicitly showing thunk (even though RTK adds it automatically)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }),
});
