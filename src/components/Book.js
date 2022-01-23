import React from "react";

const Book = (props) => {
  // events:
  // attribute, eventHandler
  // onClick, onMouseOver
  const { img, title, author } = props.book;

  const clickMe = () => {
    alert("you clicked me!");
  };

  const complexEample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickMe}>
        reference example
      </button>
      <button type="button" onClick={() => complexEample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
