import { useState } from "react";
import BookCreate from "./components/BookCreate";

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Create a book with the title", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}
