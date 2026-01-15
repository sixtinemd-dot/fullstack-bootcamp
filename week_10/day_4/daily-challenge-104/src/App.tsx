import React, { useState } from "react";
import { List } from "./components/List";

// Define Book type inline here
interface Book {
  id: number;
  title: string;
  author: string;
}

export const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (!title.trim() || !author.trim()) return;

    const newBook: Book = {
      id: books.length + 1,
      title,
      author,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Book List</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <List
        items={books}
        renderItem={(book) => (
          <span>
            <strong>{book.title}</strong> by {book.author}
          </span>
        )}
      />
    </div>
  );
};
