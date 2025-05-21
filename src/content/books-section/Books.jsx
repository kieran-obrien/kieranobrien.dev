import axios from "axios";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8888/api/books");
        console.log("API response:", res);
        setBooks(res.data.books);
      } catch (err) {
        console.error("Error fetching books", err);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {books
        ? books.items.map((book) => (
            <div key={book.id}>
              {book.volumeInfo.title}
              <img src={book.volumeInfo.imageLinks.thumbnail} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default Books;
