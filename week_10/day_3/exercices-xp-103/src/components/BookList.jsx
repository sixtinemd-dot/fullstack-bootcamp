import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from "../redux/selectors";

function BookList() {
  // 1. Local UI state
  const [genre, setGenre] = useState("All");

  // 2. Select data based on genre
  const books =
    genre === "Horror"
      ? useSelector(selectHorrorBooks)
      : genre === "Fantasy"
      ? useSelector(selectFantasyBooks)
      : genre === "Science Fiction"
      ? useSelector(selectScienceFictionBooks)
      : useSelector(selectBooks);

  return (
    <div>
      {/* 3. Genre buttons */}
      <button onClick={() => setGenre("All")}>All</button>
      <button onClick={() => setGenre("Horror")}>Horror</button>
      <button onClick={() => setGenre("Fantasy")}>Fantasy</button>
      <button onClick={() => setGenre("Science Fiction")}>
        Science Fiction
      </button>

      {/* 4. Book list */}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} – {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
