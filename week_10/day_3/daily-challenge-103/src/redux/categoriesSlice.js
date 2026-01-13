import { createSlice } from "@reduxjs/toolkit";

// 1. Initial state for categories
// Each category has: id, name
const initialState = {
  categories: [
    { id: 1, name: "Work" },
    { id: 2, name: "Personal" },
    { id: 3, name: "Fitness" },
  ],
  selectedCategoryId: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // 2. Add category
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    // 3. Edit category
    editCategory: (state, action) => {
      const { id, name } = action.payload;
      const category = state.categories.find((c) => c.id === id);
      if (category) category.name = name;
    },
    // 4. Delete category
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter((c) => c.id !== action.payload);
    },
    // 5. Select category
    selectCategory: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { addCategory, editCategory, deleteCategory, selectCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
