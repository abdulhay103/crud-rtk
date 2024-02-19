import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/books/bookSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      bookReducer: bookReducer,
    },
  });
};
