import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

// 3. Configure store
export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
