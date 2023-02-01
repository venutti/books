import useBooks from "../hooks/useBooks";
import BookShow from "./BookShow";

export default function BookList() {
  const { books } = useBooks();

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}
