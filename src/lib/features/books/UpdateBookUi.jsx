"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "./bookSlice";
import { useRouter } from "next/navigation";

export default function UpdateBookUi({ bookId }) {
  const books = useSelector((state) => state.bookReducer.books);
  const book = books.filter((book) => book.id == bookId);
  const { id, title, author } = book[0];
  const dispatch = useDispatch();
  const router = useRouter();

  const [inputValues, setInputValues] = useState({
    id: id,
    title: title,
    author: author,
  });

  const onChangeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateBook(inputValues));
    router.push("/");
  };
  return (
    <div className=" container mx-auto">
      <div className="w-2/5 p-6 mx-auto border-2 border-slate-500 my-10 rounded-3xl shadow-2xl shadow-yellow-300">
        <h1 className=" text-center text-xl font-bold">Add a new book</h1>
        <form action="" className=" p-6 " onSubmit={onSubmitHandler}>
          <div className=" py-2">
            <label htmlFor="title">Book Title</label>
            <input
              onChange={onChangeHandler}
              type="text"
              name="title"
              value={inputValues.title}
              id="title"
              placeholder="Ex. Islma"
              className=" w-full py-2 px-5 border rounded my-2"
            />
          </div>
          <div className=" py-2">
            <label htmlFor="author">Author Name</label>
            <input
              onChange={onChangeHandler}
              value={inputValues.author}
              type="text"
              name="author"
              id="author"
              placeholder="Ex. Mohammad (SM)"
              className=" w-full py-2 px-5 border rounded my-2"
            />
          </div>
          <button className=" my-3 px-5 py-2 bg-slate-500 text-white rounded-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
