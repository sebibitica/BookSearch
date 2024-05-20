// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import Book from './Book';

const BookList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&key=YOUR_KEY`
        );
        const data = await response.json();
        console.log(data.items); // Log the data items
        setBooks(data.items || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20&key=YOUR_KEY`
        );
        const data = await response.json();
        setBooks(data.items || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchBooks();
    }
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
          image={book.volumeInfo.imageLinks?.thumbnail}
        />
      ))}
    </div>
  );
};

export default BookList;
