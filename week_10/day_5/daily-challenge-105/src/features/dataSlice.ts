

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/api";
import type { Recipe, DataState } from "../types/types";

interface RecipesApiResponse {
  recipes: Recipe[];
}

export const fetchRecipes = createAsyncThunk(
  "data/fetchRecipes",
  async () => {
    return fetchData<RecipesApiResponse>(
      "https://dummyjson.com/recipes"
    );
  }
);

const initialState: DataState<Recipe> = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.recipes;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default dataSlice.reducer;
