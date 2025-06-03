import React from "react";

function BookList({ books, setBooks, setEditing }) {
  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleEdit = (book) => {
    setEditing(book);
  };

  return (
    <div className="p-4 mt-4 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">Danh sách các cuốn sách</h2>
      {books.length == 0 && <p>Chưa có cuốn sách nào</p>}
      <ul className="space-y-2">
        {books.map((book) => (
          <li
            key={book.id}
            className="p-4 border rounded-xl bg-white shadow flex justify-between"
          >
            <div>
              <p className="font-bold">{book.bookName}</p>
              <p className="text-sm text-gray-200">{book.author}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="text-white rounded hover:scale-110 transition p-2 bg bg-green-800"
                onClick={() => handleEdit(book)}
              >
                Sửa
              </button>
              <button
                className="text-white rounded hover:scale-110 transition p-2 bg bg-red-800"
                onClick={() => handleDeleteBook(book.id)}
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
