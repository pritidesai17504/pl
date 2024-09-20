// src/App.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'; // We'll create this for basic styling
import CharacterList from './components/CharacterList';
import Error from './components/Error';
import Loader from './components/Loader';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCharacters = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      setCharacters(response.data.results);
      const total = response.data.count;
      setTotalPages(Math.ceil(total / 10)); // SWAPI returns 10 results per page
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch characters. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>STAR WARS APP</h1>
      <pre><strong>by PRITI DESAI</strong></pre>
      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && !error && (
        <>
          <CharacterList characters={characters} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default App;
