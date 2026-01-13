import { createSelector } from "@reduxjs/toolkit";

// 1. Base selector
export const selectBooks = (state) => state.books.books;

// 2. Horror books selector
export const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Horror")
);

// 3. Fantasy books selector
export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Fantasy")
);

// 4. Science Fiction books selector
export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Science Fiction")
);
