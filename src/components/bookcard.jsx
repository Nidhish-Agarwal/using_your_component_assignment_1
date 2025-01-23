// write the book component code here
import React from "react";

function bookcard({ book }) {
  return (
    <div>
      <img src={book.image} alt="Image of the book" />
      <h2>Name: {book.name}</h2>
      <p>Aurhor: {book.author}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
}

export default bookcard;
