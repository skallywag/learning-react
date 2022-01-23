import React from "react";
import ReactDOM from "react-dom";
import { books } from "./components/Books";
import Book from "./components/Book";
import { greeting } from "./testing/testing";
//CSS
import "./index.css";

// stateless functional component
// always need to return jsx!(a single element)
// use camelCase for html attributes
// className instead of class
// close every element(self close)

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
