import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

// stateless functional component
// always need to return jsx!(a single element)
// use camelCase for html attributes
// className instead of class
// close every element(self close)

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Eric Carle";
const Book = () => {
  const title = "The very hungry caterpillar";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toLocaleUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
