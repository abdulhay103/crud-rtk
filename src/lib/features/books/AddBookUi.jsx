"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./bookSlice";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function AddBookUi() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [inputValues, setInputValues] = useState({
    title: "",
    author: "",
  });

  const onChangeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newBook = { ...inputValues, id: uuidv4() };
    dispatch(addBook(newBook));
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
