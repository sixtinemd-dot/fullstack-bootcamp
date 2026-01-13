import { createSlice } from "@reduxjs/toolkit";

// 1. Initial state
const initialState = {
  books: [
    { id: 1, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
    { id: 2, title: "It", author: "Stephen King", genre: "Horror" },
    { id: 3, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
    { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { id: 5, title: "Neuromancer", author: "William Gibson", genre: "Science Fiction" },
  ],
};

// 2. Create slice
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
