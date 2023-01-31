import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      // Generate random id
      { id: Math.round(Math.random() * 999999), title },
    ];

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
