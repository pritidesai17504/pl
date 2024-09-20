// src/components/CharacterList.js
import React from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css'; // We'll create this for styling

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
