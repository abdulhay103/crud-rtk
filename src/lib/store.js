import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/books/bookSlice";

export default makeStore = () => {
  return configureStore({
    reducer: {
      books: bookReducer,
    },
  });
};
