import React from "react";

export default function EditBookDetails({ params }) {
  const id = params.bookId;
  return <div>Book ID {id}</div>;
}
