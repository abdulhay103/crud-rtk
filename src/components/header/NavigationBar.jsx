import Link from "next/link";
import React from "react";

export default function NavigationBar() {
  return (
    <header className=" bg-slate-300">
      <div className="container mx-auto ">
        <div className=" flex gap-6 justify-center">
          <Link
            href="/"
            className=" p-3 text-lg font-medium hover:text-orange-600 transition-all duration-300"
          >
            Book List
          </Link>
          <Link
            href="/edit-book"
            className=" py-3 text-lg font-medium hover:text-orange-600 transition-all duration-300"
          >
            Edit Book
          </Link>
          <Link
            href="/add-book"
            className=" p-3 text-lg font-medium hover:text-orange-600 transition-all duration-300"
          >
            Add Books
          </Link>
        </div>
      </div>
    </header>
  );
}
