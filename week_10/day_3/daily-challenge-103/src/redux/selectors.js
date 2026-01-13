import { createSelector } from "@reduxjs/toolkit";

// 1. Base selectors
export const selectTasks = (state) => state.tasks.tasks;
export const selectCategories = (state) => state.categories.categories;
export const selectSelectedCategoryId = (state) => state.categories.selectedCategoryId;

// 2. Tasks by category
export const selectTasksByCategory = createSelector(
  [selectTasks, selectSelectedCategoryId],
  (tasks, categoryId) => {
    if (!categoryId) return tasks;
    return tasks.filter((t) => t.categoryId === categoryId);
  }
);

// 3. Count of completed tasks
export const selectCompletedTasks = createSelector([selectTasks], (tasks) =>
  tasks.filter((t) => t.completed).length
);

// 4. Category details by ID
export const selectCategoryById = (categoryId) =>
  createSelector([selectCategories], (categories) =>
    categories.find((c) => c.id === categoryId)
  );
