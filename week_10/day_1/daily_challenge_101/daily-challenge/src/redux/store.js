import { configureStore } from "@reduxjs/toolkit";
import plannerReducer from "./plannerSlice";

// 1. Configure store
export const store = configureStore({
  reducer: {
    planner: plannerReducer,
  },
});
