import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Amar Bangladesh", author: "Kazi Nazrul Islam" },
    { id: 2, title: "Podma Nadir Majhi", author: "Bankim Chandra" },
    { id: 3, title: "Hazar Bosor Dhore", author: "Jahir Raihan" },
  ],
};

export const bookSlices = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    readBook: (state) => {
      state = state.books;
    },
    addBook: (state, action) => {
      newBook = action.payload;
      state.books.push(newBook);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { readBook, deleteBook } = bookSlices.actions;
export default bookSlices.reducer;
