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
  },
});

export const { readBook } = bookSlices.actions;
export default bookSlices.reducer;
