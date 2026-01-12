import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk: age up
export const ageUpAsync = createAsyncThunk(
  "age/ageUpAsync",
  async (_, { dispatch }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1); // increment by 1
      }, 1000); // 1 second delay
    });
  }
);

// Async thunk: age down
export const ageDownAsync = createAsyncThunk(
  "age/ageDownAsync",
  async (_, { dispatch }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(-1); // decrement by 1
      }, 1000);
    });
  }
);

const ageSlice = createSlice({
  name: "age",
  initialState: {
    age: 20,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Age Up
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.loading = false;
      })
      .addCase(ageUpAsync.rejected, (state) => {
        state.loading = false;
      })
      // Age Down
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.loading = false;
      })
      .addCase(ageDownAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
