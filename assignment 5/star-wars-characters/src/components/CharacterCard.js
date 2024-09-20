import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CharacterCard.css';
import CharacterModal from './CharacterModal';

const CharacterCard = ({ character }) => {
  const [species, setSpecies] = useState('unknown');
  const [color, setColor] = useState('#ccc'); // Default color
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  // Fetch species to determine card color
  useEffect(() => {
    const fetchSpecies = async () => {
      if (character.species.length > 0) {
        try {
          const response = await axios.get(character.species[0]);
          setSpecies(response.data.name);
  
          // Assign color based on species
          switch (response.data.name) {
            case 'Human':
              setColor('#CC99FF'); //FAINT PURPLE
              break;
              case 'Gungan':
                setColor('#FF3333');  
              break;
            case 'Droid':
              setColor('pink'); //pink
              break;
            case 'Wookiee':
              setColor('#8B4513'); 
              break;
            case 'unknown':
              setColor('aquamarine'); 
              break;
            case 'Rodian':
              setColor('#00FF00'); 
              break;
            case 'Mon Calamari':
              setColor('#FFA07A'); //orange red
            case 'Aleena':
                setColor('#FFA07A');
              break;
            case 'Zabrak':
              setColor('#FF4500'); 
            case 'Neimodian':
                setColor('#66FFFF');  
              break;
              case 'Tholothian':
                setColor('#FF0099');  
              break;
              case 'Quermian':
                setColor('#99FF33');  
              break;
            default:
              setColor('#ccc'); // Default gray for unknown species
          }
        } catch (err) {
          setSpecies('unknown');
          setColor('#ccc');
        }
      } else {
        setSpecies('unknown');
        setColor('#ccc');
      }
    };
  
    fetchSpecies();
  }, [character.species]);
  

  // Fetch character image from Star Wars Visual Guide API
  useEffect(() => {
    const characterId = character.url.split('/')[5]; // Extract character ID from the SWAPI URL
    const characterImageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

    // Set the character image URL
    setImageUrl(characterImageUrl);
  }, [character.url]);

  return (
    <>
      <div
        className="character-card"
        style={{ backgroundColor: color }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Use actual Star Wars image URL */}
        <img src={imageUrl} alt={character.name} className="character-image" />
        <h3>{character.name}</h3>
        <p>Species: {species}</p>
      </div>
      {isModalOpen && (
        <CharacterModal
          character={character}
          species={species}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default CharacterCard;
