// src/components/CharacterModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './CharacterModal.css'; // We'll create this for styling

Modal.setAppElement('#root'); // Accessibility feature

const CharacterModal = ({ character, species, onClose }) => {
  const [homeworld, setHomeworld] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHomeworld = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(character.homeworld);
      setHomeworld(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch homeworld information.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeworld();
  }, [character.homeworld]);

  // Format date to dd-MM-yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Character Details"
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>{character.name}</h2>
      <div className="modal-content">
        <p><strong>Height:</strong> {character.height} cm ({(character.height / 100).toFixed(2)} m)</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p><strong>Birth Year:</strong> {character.birth_year}</p>
        <p><strong>Date Added:</strong> {formatDate(character.created)}</p>
        <p><strong>Number of Films:</strong> {character.films.length}</p>
        {loading && <p>Loading homeworld...</p>}
        {error && <p className="error">{error}</p>}
        {homeworld && (
          <>
          {/* <br></br> */}
          <pre>-----------------------------------</pre>
            <p><strong>Homeworld:</strong> {homeworld.name}</p>
            <p><strong>Terrain:</strong> {homeworld.terrain}</p>
            <p><strong>Climate:</strong> {homeworld.climate}</p>
            <p><strong>Number of Residents:</strong> {homeworld.residents.length}</p>
          </>
        )}
      </div>
    </Modal>
  );
};

export default CharacterModal;
