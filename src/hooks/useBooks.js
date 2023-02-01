import { useContext } from "react";
import { BooksContext } from "../context/books";

export default function useBooks() {
  return useContext(BooksContext);
}
