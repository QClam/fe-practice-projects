import React, { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditing] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <AddBookForm
        books={books}
        setBooks={setBooks}
        editingBook={editingBook}
        setEditing={setEditing}
      />
      <BookList books={books} setBooks={setBooks} setEditing={setEditing} />
    </div>
  );
}

export default App;
