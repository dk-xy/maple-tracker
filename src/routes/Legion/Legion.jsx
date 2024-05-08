// legion.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddCharacter from '../../components/AddCharacter';

// const [character, setCharacter] = useState(null)

function Legion() {
   const [characters, setCharacters] = useState([]);
   useEffect(() => {
      // Retrieve characters from localStorage
      // const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];
      const characters = JSON.parse(localStorage.getItem('Characters'));
      setCharacters(characters)
  }, []);

   return (
      <div className="Legion">
         LEGION
         <AddCharacter />

         <ul>
                {characters.map((character, index) => (
                    <li key={index}>
                        {/* Display character details */}
                        Character Name: {character.characterName}, Class: {character.characterClass}
                    </li>
                ))}
            </ul>
            {/* Add other components or content as needed */}
      </div>

   )
}

export default Legion;