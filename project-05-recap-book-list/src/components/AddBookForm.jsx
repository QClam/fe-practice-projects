import React, { useEffect, useState } from "react";

function AddBookForm({ books, setBooks, editingBook, setEditing }) {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (editingBook) {
      setBookName(editingBook.bookName);
      setAuthor(editingBook.author);
    }
  }, [editingBook]);

  const handleAddBook = () => {
    if (!bookName || !author) {
      alert("Nhập đầy đủ thông tin");
      return;
    }

    if (editingBook) {
      const updatedBooks = books.map((book) =>
        book.id === editingBook.id
          ? { ...book, name: bookName, author: author }
          : book
      );
      setBooks(updatedBooks);
      setEditing(null);
    } else {
      const newBook = {
        id: Date.now(),
        bookName: bookName,
        author: author,
      };
      setBooks([...books, newBook]);
    }

    setBookName("");
    setAuthor("");
  };

  return (
    <div className="border shadow p-4 rounded-2xl w-ful max-w-md">
      <div className="flex flex-col gap-4 mb-4 p-4">
        <input
          type="text"
          placeholder="Nhập tên cuốn sách"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          className="focus:outline-none border-b-2"
        />
        <input
          type="text"
          placeholder="Tác Giả"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="focus:outline-none border-b-2"
        />
      </div>
      <div className="flex gap-4 p-4">
        <button
          className="cursor-pointer bg-blue-400 rounded-2xl text-white p-4"
          onClick={handleAddBook}
        >
          {editingBook ? "Sửa" : "Nhập"}
        </button>
        {editingBook && (
          <button
            className="cursor-pointer bg-gray-400 rounded-2xl text-white p-4"
            onClick={() => {
              setEditing(null);
              setBookName("");
              setAuthor("");
            }}
          >
            Hủy
          </button>
        )}
      </div>
    </div>
  );
}

export default AddBookForm;
