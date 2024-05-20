// src/App.js
import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div className="App">
      <h1>Book Search</h1>
      <BookSearch onSearch={handleSearch} />
      <BookList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
