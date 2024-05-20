// src/components/BookSearch.js
import React, { useState } from 'react';
import './BookSearch.css'; // Import CSS file for BookSearch component

const BookSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default BookSearch;
