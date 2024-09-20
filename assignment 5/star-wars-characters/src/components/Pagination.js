// src/components/Pagination.js
import React from 'react';
import './Pagination.css'; // We'll create this for styling

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  // Simple pagination logic: show all pages if totalPages is small
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={`page-button ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
