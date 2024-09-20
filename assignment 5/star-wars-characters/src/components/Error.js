// src/components/Error.js
import React from 'react';
// import './Error.css'; // We'll create this for styling

const Error = ({ message }) => {
  return (
    <div className="error">
      {message}
    </div>
  );
};

export default Error;
