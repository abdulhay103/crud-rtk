import UpdateBookUi from "@/lib/features/books/UpdateBookUi";
import React from "react";

export default function EditBookDetails({ params }) {
  const id = params.bookId;
  return <UpdateBookUi bookId={id} />;
}
