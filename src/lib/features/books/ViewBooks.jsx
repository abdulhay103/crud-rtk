"use client";
import { useDispatch, useSelector } from "react-redux";

export default function ViewBooks() {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  return (
    <div className=" container mx-auto">
      {books &&
        books.map((book) => {
          const { id, title, author } = book;
          return (
            <div>
              <h4>{title}</h4>
            </div>
          );
        })}
    </div>
  );
}
