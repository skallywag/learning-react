import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

// stateless functional component
// always need to return jsx!(a single element)
// use camelCase for html attributes
// className instead of class
// close every element(self close)

// setup variable
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL200_SR200,200_.jpg",
    title: "The very hungry caterpillar",
    author: "Eric Carle",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_UL200_SR200,200_.jpg",
    title: "Wheres Spot?",
    author: "Eric Hill",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81PUnVR%2BowL._AC_UL200_SR200,200_.jpg",
    title: "Jhonny the walrus",
    author: "Matt Walsh",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  // events:
  // attribute, eventHandler
  // onClick, onMouseOver
  const { img, title, author } = props.book;

  const clickMe = () => {
    alert("you clicked me!");
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickMe}>
        click me
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
