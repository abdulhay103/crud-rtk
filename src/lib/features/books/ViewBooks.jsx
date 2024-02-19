"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function ViewBooks() {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  return (
    <div className=" container mx-auto py-10">
      <div className=" w-3/4 flex justify-around mx-auto">
        <div className=" border w-full text-center border-gray-900 py-2 bg-gray-200">
          <p className=" text-lg font-bold">Title</p>
        </div>
        <div className=" border w-full text-center border-gray-900 py-2 bg-gray-200">
          <p className=" text-lg font-bold">Author</p>
        </div>
        <div className=" border w-full text-center border-gray-900 py-2 bg-gray-200">
          <p className=" text-lg font-bold">Action</p>
        </div>
      </div>
      <div>
        {books &&
          books.map((book) => {
            const { id, title, author } = book;
            return (
              <div className=" w-3/4 mx-auto flex ">
                <div className="border w-full text-center border-gray-900 py-2 bg-orange-100">
                  <p>{title}</p>
                </div>
                <div className="border w-full text-center border-gray-900 py-2 bg-orange-100">
                  <p>{author}</p>
                </div>
                <div className="border w-full text-center border-gray-900 py-2 bg-orange-100 flex gap-5 justify-center">
                  <Link href={`/edit-book/${id}`} className=" text-blue-500">
                    Update
                  </Link>
                  <button className=" text-red-500">Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
