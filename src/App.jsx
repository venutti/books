import { useEffect } from "react";
import useBooks from "./hooks/useBooks";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

export default function App() {
  const { fetchBooks } = useBooks();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
