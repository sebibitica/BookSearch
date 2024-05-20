// src/components/Book.js
import React from 'react';
import './Book.css';

const Book = ({ title, author, image }) => {
  // Truncate long titles
  const truncatedTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;

  return (
    <div className="book">
      <img src={image} alt={`${title} cover`} className="book-image" />
      <div className="book-details">
        <h3>{truncatedTitle}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Book;
