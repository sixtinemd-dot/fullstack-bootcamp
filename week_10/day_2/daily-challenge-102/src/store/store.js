import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "./ageSlice";

// Create Redux store
export const store = configureStore({
  reducer: {
    age: ageReducer,
  },
  // Explicitly show thunk (optional, RTK includes it by default)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }),
});
